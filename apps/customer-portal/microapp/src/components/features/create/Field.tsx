import {
  FormControl,
  TextField as MuiTextField,
  MenuItem,
  Select,
  Stack,
  InputLabel,
  type SelectChangeEvent,
} from "@wso2/oxygen-ui";

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: number | string; label: string }[];
  value?: number | string;
  startAdornment?: React.ReactNode;
  disabled?: boolean;
  onChange?: (event: SelectChangeEvent<number | string>) => void;
}

export function SelectField({
  name,
  label,
  options,
  value = 0,
  disabled = false,
  startAdornment,
  onChange,
}: SelectFieldProps) {
  const seen = new Set();
  options = options.filter((option) => {
    if (seen.has(option.value)) return false;
    else {
      seen.add(option.value);
      return true;
    }
  });

  return (
    <FormControl component={Stack} gap={1} fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        label={label}
        value={value}
        sx={{ bgcolor: "background.paper" }}
        startAdornment={startAdornment}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function TextField({
  name,
  label,
  value,
  multiline = false,
  rows = 10,
  placeholder,
  startAdornment,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  startAdornment?: React.ReactNode;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FormControl component={Stack} gap={1} fullWidth>
      <MuiTextField
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        sx={{ bgcolor: "background.paper", lineHeight: multiline ? 1.65 : undefined }}
        slotProps={{
          input: {
            startAdornment: startAdornment,
          },
        }}
        onChange={onChange}
      />
    </FormControl>
  );
}
