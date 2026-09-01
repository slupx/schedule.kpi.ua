import Papa from 'papaparse';
import { MeetingLink } from '../models/MeetingLink';
import { MEETING_LINKS_CSV_URL } from '../common/constants/config';

const FETCH_TIMEOUT_MS = 5000;

export const getMeetingLinks = async (): Promise<MeetingLink[]> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(MEETING_LINKS_CSV_URL, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`Failed to fetch meeting links: ${response.status}`);
    }

    const csvText = await response.text();

    const { data, errors } = Papa.parse<MeetingLink>(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    if (errors.length > 0) {
      throw new Error(`CSV parse error: ${errors[0].message}`);
    }

    return data;
  } finally {
    clearTimeout(timeoutId);
  }
};