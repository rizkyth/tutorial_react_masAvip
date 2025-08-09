import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
