import { ReactNode } from "react";
import * as S from "./styles";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary" | "sucess" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "text";
}

export const Button = ({
  children,
  color = "primary",
  size = "medium",
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <S.Button size={size} color={color} variant={variant} {...props}>
      {children}
    </S.Button>
  );
};
