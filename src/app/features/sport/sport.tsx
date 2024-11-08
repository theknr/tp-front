import { useState, useEffect } from "react";
import Papa from "papaparse";
import background from "@/assets/background.png";
import { Input } from "@/ui/atoms/input.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import { MatchData } from "@/app/features/sport/sport.props.ts";
import { sanitizeInput } from "@/app/features/sport/sport.helpers.ts";

function TeamWins() {
  const [beatTeams, setBeatTeams] = useState<string[]>([]);
  const [matches, setMatches] = useState<MatchData[]>([]);
  const { setSelectedTeam } = useZsStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.csv");
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result?.value);
      Papa.parse<MatchData>(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (parsedData) => {
          setMatches(parsedData.data);
        },
      });
    };

    fetchData();
  }, []);

  const searchBeatenTeams = (teamInput: string) => {
    const formattedTeam = sanitizeInput(teamInput);

    const beatenTeams = matches
      .filter(
        (match) =>
          (match.HomeTeam === formattedTeam && match.FTR === "H") ||
          (match.AwayTeam === formattedTeam && match.FTR === "A"),
      )
      .map((match) =>
        match.HomeTeam === formattedTeam ? match.AwayTeam : match.HomeTeam,
      );

    setBeatTeams(beatenTeams);
    return beatenTeams;
  };

  const handleChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
    setSelectedTeam(sanitizeInput(inputValue));
    searchBeatenTeams(inputValue);
  };

  return (
    <div
      className="w-screen h-screen bg-center bg-repeat-y bg-cover flex flex-col text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-start p-4">
        <h1 className="text-2xl font-bold">Football Challenge</h1>
      </div>

      <div className="flex flex-1 items-start justify-center mt-10">
        <div className="w-1/2 max-w-md">
          <Input
            className="border-0 border-white rounded-none focus:border-white ring-0 ring-offset-0 !text-4xl font-bold placeholder:text-4xl py-4 h-auto min-h-[80px]"
            variant="default"
            placeholder="Input winning team"
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-start mt-10 pl-4 overflow-y-auto max-h-1/2 ml-10">
        <div className="w-1/3">
          {beatTeams.length > 0 && (
            <div className="pt-10">
              <h2 className="text-2xl mb-2">These teams you won against:</h2>
              <ul className="list-disc list-inside mt-4">
                {beatTeams.map((beatenTeam, index) => (
                  <ol key={index} className="text-lg">
                    {beatenTeam}
                  </ol>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamWins;
