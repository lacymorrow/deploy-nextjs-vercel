"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { CTA } from "./components/cta";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(CTA, {
  name: "CTA",
  inputs: [
    {
      name: "backgroundImage",
      type: "string",
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "primaryButton",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CTAButton",
      },
      required: true,
    },
    {
      name: "secondaryButton",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CTAButton",
      },
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
