import { Pair } from '../../models/Pair';
import { Schedule } from '../../models/Schedule';
import ScheduleDayToggler from '../ScheduleDayToggler';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import { SliceContextProvider } from '../../common/context/SliceOptionsContext';
import { ScheduleComponentsProps } from '../../types/ScheduleComponentsProps';
import { cn } from '../../common/utils/cn';

export const ScheduleGrid = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    className={cn(
      'bg-bg-table relative flex flex-col gap-4 border-2 border-neutral-100 rounded-[20px] overflow-hidden grow',
      className,
    )}
    {...props}
  />
);

interface ScheduleWrapperProps<T extends Pair> extends ScheduleComponentsProps<T> {
  schedule?: Schedule<T>;
}

const ScheduleWrapper = <T extends Pair>({
  schedule,
  baseComponent: BaseComponent,
  baseComponentExtended: BaseComponentExtended,
}: ScheduleWrapperProps<T>) => {
  return (
    <SliceContextProvider>
      <ScheduleDayToggler />
      <ScheduleTable schedule={schedule} baseComponent={BaseComponent} baseComponentExtended={BaseComponentExtended} />
    </SliceContextProvider>
  );
};

export default ScheduleWrapper;
