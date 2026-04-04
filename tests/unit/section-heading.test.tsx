import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeading } from "@/components/section-heading";

describe("SectionHeading", () => {
  it("renders the eyebrow, title, and supporting body copy", () => {
    render(
      <SectionHeading
        eyebrow="Process"
        title="One operating loop"
        body="The files, not the chat, define what is approved."
      />,
    );

    expect(screen.getByText("Process")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "One operating loop" })).toBeInTheDocument();
    expect(screen.getByText("The files, not the chat, define what is approved.")).toBeInTheDocument();
  });
});