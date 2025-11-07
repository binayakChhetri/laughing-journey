import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { SetupStep } from "../types";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

interface SetupGuideCardProps {
  steps: SetupStep[];
}

export function SetupGuideCard({ steps }: SetupGuideCardProps) {
  return (
    <Card className="border-border">
      <CardHeader className="px-6 pb-0">
        <CardTitle className="heading-md">Setup Guide</CardTitle>
        <CardDescription className="body-sm">
          Follow this 3 steps guide to quickly integrate KrispPay to your website.
        </CardDescription>
      </CardHeader>
      <Separator className="mt-4" />
      <CardContent className="pt-6 flex flex-col gap-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-start gap-6 relative">
            {/* Progress line */}
            {index < steps.length - 1 && (
              <div className="absolute left-[5px] top-[28px] w-0.5 h-[calc(100%+32px)]" 
                   style={{ backgroundColor: index === steps.length - 2 && !steps[index + 1].completed ? '#e3e6e7' : '#5f47f6' }} />
            )}
            
            {/* Step indicator */}
            <div className="flex-shrink-0 z-10">
              {step.completed ? (
                <div className="w-3 h-3 rounded-full bg-(--purple) flex items-center justify-center">
                  <CheckCircleIcon width={11} height={8} color="#ffffff" />
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full border-2 border-(--neutral-100) bg-(--white) flex items-center justify-center">
                  <span className="label-xs text-(--neutral-100)">{step.id}</span>
                </div>
              )}
            </div>

            {/* Step content */}
            <div className="flex-1 flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="heading-xs">{step.title}</h3>
                <p className="body-sm">{step.description}</p>
              </div>
              
              <Link 
                href={step.actionLink}
                className="flex items-center gap-1 body-sm-medium text-(--neutral-60) hover:text-(--purple) transition-colors whitespace-nowrap"
              >
                {step.actionText}
                <ChevronRightIcon width={5} height={9} color="currentColor" />
              </Link>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}