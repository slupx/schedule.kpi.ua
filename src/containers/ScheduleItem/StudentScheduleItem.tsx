import { StudentPair } from '../../models/StudentPair';
import { ScheduleItemProps } from './types';
import StudentScheduleContent from './StudentScheduleContent';

const StudentScheduleItem = <T extends StudentPair>({ scheduleMatrixCell, collapsed }: ScheduleItemProps<T>) => {
  return (
    <div className="z-5 bg-bg-card shadow-schedule-item p-4 border border-neutral-200 rounded-2xl">
      <StudentScheduleContent scheduleMatrixCell={scheduleMatrixCell} collapsed={collapsed} />
    </div>
  );
};

export default StudentScheduleItem;
