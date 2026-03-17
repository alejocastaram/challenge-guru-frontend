import Select, { type SingleValue } from "react-select";
import type { TeamOption } from "./team-option";
import { TEAMS } from "./teams";
import LogoSelect from "./LogoSelect";

interface TeamSelectProps {
    value: string;
    onChange: (value: string, logo: string) => void;
    label?: string;
    logo: string;
}

export default function TeamSelect({ value, onChange, label }: TeamSelectProps) {
    const selectedOption: TeamOption | null = TEAMS.find(team => team.value === value) || null;

    return (
      <div className="mb-3">
        {label && <label className="form-label">{label}</label>}
  
        <Select
          classNamePrefix="react-select"
          className="mb-2"
          options={TEAMS}
          value={selectedOption}
          onChange={(selected: SingleValue<TeamOption>) => {
            onChange(
              selected?.value || "",
              selected?.logo || ""
            )}
          }
          placeholder="Buscar equipo..."
          isClearable
          formatOptionLabel={LogoSelect}
        />
      </div>
    );
}