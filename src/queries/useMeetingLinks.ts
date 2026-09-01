import { useQuery } from "react-query";
import { getMeetingLinks } from "../api/meetingLinks";

export const useMeetingLinks = () => {
  return useQuery({
    queryKey: ['meetingLinks'],
    queryFn: getMeetingLinks,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 3,
  });
}