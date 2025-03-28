"use client";

import AOSInit from "./AOSInit";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AOSInit />
      {children}
    </>
  );
};

export default ClientWrapper;
