'use client';

import { FC } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScreenDrawerData } from '@/types/drawer';

const screens: ScreenDrawerData[] = [
  {
    type: 'single_choice',
    title: 'Single choice',
    description: 'A screen with a single choice question',
  },
  {
    type: 'multiple_choice',
    title: 'Multiple choice',
    description: 'A screen with a multiple choice question',
  },
  {
    type: 'divider',
    title: 'Divider',
    description: 'A screen that divides the flow',
  },
  {
    type: 'input',
    title: 'Input',
    description: 'A screen with an input field',
    isAvailable: true,
  },
  {
    type: 'single_select',
    title: 'Single select',
    description: 'A screen with a single select question',
  },
  {
    type: 'default',
    title: 'Default',
    description: 'For testing purposes',
    isAvailable: true,
  },
];

type Props = {
  addScreen: (type: string, title: string) => void;
};

const ScreenDrawer: FC<Props> = ({ addScreen }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add screen</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">Screens hub</DrawerTitle>
          <DrawerDescription className="text-center">
            Select a screen to add to the flow
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex p-10 gap-1 justify-start flex-wrap max-w-[1138px] m-auto">
          {screens.map(({ type, title, description, isAvailable }) => (
            <Card key={type} className="w-[350px]">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between">
                {isAvailable ? (
                  <>
                    <Button variant="outline" onClick={() => addScreen(type, title)}>
                      Add
                    </Button>
                    <Button>Preview</Button>
                  </>
                ) : (
                  <CardDescription>Coming soon</CardDescription>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ScreenDrawer;
