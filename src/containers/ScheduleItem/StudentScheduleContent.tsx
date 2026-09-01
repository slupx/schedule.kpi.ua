import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import ScheduleItemBase from './ScheduleItemBase';
import PairLocationProperty from './PairLocationProperty';
import { IrregularSchedulesTable } from './IrregularSchedulesTable';
import LecturerProperty from './LecturerProperty';
import { useMeetingLink } from '../../queries/useMeetingLink';
import { Button } from '../../components/ui/button';

const StudentScheduleContent = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  const {
    pair: { lecturer, location, dates, name, tag },
  } = scheduleMatrixCell;

  const { meetingLink, isLoading } = useMeetingLink(name, tag, lecturer);

  return (
    <ScheduleItemBase scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed}>
      {lecturer && <LecturerProperty lecturer={lecturer} />}
      {location && <PairLocationProperty location={location} />}
      {!!dates.length && <IrregularSchedulesTable dates={dates} />}
      {(isLoading || meetingLink) && (
        <div className='flex flex-1 justify-end items-end'>
          {isLoading ? (
            <div className='bg-neutral-100 m-1 rounded-md w-30 h-7 animate-pulse' />
          ) : (
            <Button
              variant="ghost" size="sm"
              onClick={() => window.open(meetingLink!.link, '_blank')}
            >
              Приєднатись
            </Button>
          )}
        </div>
      )}
    </ScheduleItemBase>
  );
};

export default StudentScheduleContent;

