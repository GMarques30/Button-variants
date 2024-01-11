import styled from "styled-components";
import { ButtonProps } from ".";

function getSize(size: ButtonProps["size"]) {
  switch (size) {
    case "small":
      return "0.5rem 1rem";
    case "medium":
      return "0.75rem 2rem";
    case "large":
      return "1rem 3rem";
  }
}

function getColor(color: ButtonProps["color"]) {
  switch (color) {
    case "primary":
      return `#926ADB`;
    case "secondary":
      return `#698BDB`;
    case "sucess":
      return `#30DB66`;
    case "error":
      return `#DB3330`;
    case "info":
      return `#466CDB`;
    case "warning":
      return `#DBB246`;
  }
}

function getVariant(
  variant: ButtonProps["variant"],
  color: ButtonProps["color"]
) {
  switch (variant) {
    case "contained":
      return `
        background-color: ${getColor(color)};
        color: #fafbff;
      `;
    case "outlined":
      return `
        background-color: transparent;
        border: 1px solid ${getColor(color)};
        color: ${getColor(color)};
      `;
    case "text":
      return `
        background-color: transparent;
        border: none;
        padding: 0 !important; 
        color: ${getColor(color)};
      `;
  }
}

export const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  ${({ variant, color }) => getVariant(variant, color)}
  padding: ${({ size }) => getSize(size)};
`;
