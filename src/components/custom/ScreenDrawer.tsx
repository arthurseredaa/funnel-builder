import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
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
  },
  {
    type: 'single_select',
    title: 'Single select',
    description: 'A screen with a single select question',
  },
];

const ScreenDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Add screen</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex p-10 gap-1 justify-start flex-wrap max-w-[1138px] border-amber-50 m-auto">
          {screens.map((screen) => (
            <Card key={screen.type} className="w-[350px]">
              <CardHeader>
                <CardTitle>{screen.title}</CardTitle>
                <CardDescription>{screen.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Add</Button>
                <Button>Preview</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ScreenDrawer;
