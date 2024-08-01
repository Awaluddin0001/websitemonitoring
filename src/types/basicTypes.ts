import React from "react";

export type BasicReactProps = {
  children: React.ReactNode;
};

export type ActionType = { type: string; payload?: any };

export type ReactSelect = { value: string; label: string };
