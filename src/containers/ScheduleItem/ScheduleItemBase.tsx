import { SUBJECT_TYPES } from '../../common/constants/subjectTypes';
import { Pair } from '../../models/Pair';

import SubjectTypeBadge from '../../components/SubjectTypeBadge';
import { ScheduleMatrixCell } from '../../types/ScheduleMatrix';

interface Props<T extends Pair> {
  scheduleMatrixCell: ScheduleMatrixCell<T>;
  collapsed?: boolean;
  children: React.ReactNode;
}

const ScheduleItemBase = <T extends Pair>({ scheduleMatrixCell, collapsed, children }: Props<T>) => {
  const {
    pair: { name, tag, dates },
  } = scheduleMatrixCell;

  return (
    <div className='flex flex-col gap-3 h-full'>
      <div className="flex justify-between items-center gap-[25px]">
        <SubjectTypeBadge type={tag} dates={dates}>
          {SUBJECT_TYPES[tag]}
        </SubjectTypeBadge>
        {scheduleMatrixCell.currentPair && (
          <span className="before:block before:top-1/2 before:-left-[13px] before:absolute relative before:bg-current-pair before:rounded-full before:w-2 before:h-2 font-bold text-current-pair text-xs uppercase before:content-[''] before:-translate-y-1/2">
            Зараз
          </span>
        )}
      </div>
      <div className="font-bold text-primary-font text-sm leading-[17px]">{name}</div>
      {!collapsed && <div className="flex flex-col flex-1 gap-3">{children}</div>}
    </div>
  );
};

export default ScheduleItemBase;
