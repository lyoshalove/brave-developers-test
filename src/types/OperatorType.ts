import React from "react";

export interface IOperator {
  id: number;
  name: string;
  image?: () => JSX.Element | string;
}