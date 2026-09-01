import { EntityWithNameAndId } from '../models/EntityWithNameAndId';
import { useMeetingLinks } from './useMeetingLinks';
import { useStore } from '../store';

export const useMeetingLink = (subject: string, tag: string, lecturer: EntityWithNameAndId) => {
  const group = useStore((state) => state.group);
  const { data: links, isLoading } = useMeetingLinks();

  const meetingLink = links?.find(
    (l) =>
      l.group === group?.name &&
      l.subject === subject &&
      l.type === tag &&
      l.lecturer === lecturer.name &&
      l.link !== '',
  );

  return { meetingLink, isLoading };
};
