"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";


export function PresetSelector({ presets, ...props }) {
  console.log("PresetSelector", presets, props);
  const [open, setOpen] = React.useState(false);
  const [selectedPreset, setSelectedPreset] = React.useState();
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Load a preset..."
          aria-expanded={open}
          className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
        >
          {selectedPreset ? selectedPreset.name : "Load a preset..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandEmpty>No presets found.</CommandEmpty>
          <CommandGroup heading="Examples">
            {presets?.map((preset) => {
              return (
                <CommandItem
                  key={preset.id}
                  onSelect={() => {
                    setSelectedPreset(preset);
                    setOpen(false);
                  }}
                >
                  {preset.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedPreset?.id === preset.id
                        ? "opacity-100"
                        : "opacity-0 "
                    )}
                  />
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandGroup className="pt-0">
            <CommandItem onSelect={() => router.push("/")}>
              More examples
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
