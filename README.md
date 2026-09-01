# schedule.kpi.ua (Meeting Links Fork)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/kpiua/schedule.kpi.ua)](https://hub.docker.com/r/kpiua/schedule.kpi.ua)

A responsive, maintainable, scalable, and fast UI with a modern design for the students of Igor Sikorsky Kyiv Polytechnic Institute.

> **About this fork** 
> This is an experimental fork that adds a join button linking to online meetings (Zoom, Google Meet) directly on class cards in the schedule. View on: [https://schedule.slupx.dev](https://schedule.slupx.dev)
>
> **Changelog:**
> * Added `MeetingJoinButton` component to **StudentScheduleContent** — opens a meeting link in a new tab when available.
> * Added a full data layer for meeting links: `MeetingLink` model, `src/api/meetingLinks.ts` (CSV fetch), `useMeetingLinks` query hook, and `useMeetingLink` selector hook.
> * Meeting links data is fetched from an [open Google Sheets table](https://docs.google.com/spreadsheets/d/e/2PACX-1vRuHHs45Qd1mdT3F_hpQWiU-Dwzh5reLI_u3vMtjXRtE2axj_GCv6TQcfYDRtDSDP248WgWwjETYu9g/pub?gid=0&single=true&output=csv) (CSV format, columns: Group, Subject, Type, Lecturer, Link, Note).
> * Shows a pulsing skeleton placeholder while links are loading to prevent layout shift (CLS).
> * Added `papaparse` dependency for CSV parsing.
>
> *For communication and links table editor access text @makarii_sl.*

## API usage

Schedule API is a part of **campus API**.
Base URL: https://api.campus.kpi.ua/

Endpoints:

- Groups list: [group/all](https://api.campus.kpi.ua/group/all)
- Lecturers list: [schedule/lecturer/list](https://api.campus.kpi.ua/schedule/lecturer/list)
- Group schedule: [schedule/lessons?groupId={group id}](https://api.campus.kpi.ua/schedule/lessons?groupId=fb121dae-9fe5-4a9a-bced-ff7603a19c31)
- Group exams: [exams/group?groupId={group id}](https://api.campus.kpi.ua/exams/group?groupId=fb121dae-9fe5-4a9a-bced-ff7603a19c31)
- Lecturer schedule: [schedule/lecturer?lecturerId={id from list}](https://api.campus.kpi.ua/schedule/lecturer?lecturerId=53bb6a07-bc0a-4c9b-a0e5-58866f4b3e19)
- Current day and week: [time/current](https://api.campus.kpi.ua/time/current)

## Run and Develop

### Run in the development mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Make a production build

```bash
npm run build
```

### Build Docker container

```bash
docker build ./ --file ./Dockerfile --tag kpiua/schedule.kpi.ua:latest
```

### Run latest Docker container

```bash
docker run --rm -it  -p 80:80/tcp kpiua/schedule.kpi.ua
```

## Related Projects

If you are owner of iPhone or iPad you can use this simple [iOS application](https://github.com/MrPaschenko/Schedule-KPI) which is built over schedule API.

[![Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917](https://user-images.githubusercontent.com/64316080/168581675-cfc29e4a-410c-4664-9213-31f11560813c.svg)](https://apps.apple.com/us/app/schedule-kpi/id1625484300)
