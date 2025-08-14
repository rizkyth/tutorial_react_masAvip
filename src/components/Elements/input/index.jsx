import { forwardRef } from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = forwardRef((props, ref) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});
