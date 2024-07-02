#changelog
## [3.0.0] - 2024-7-2
### Breaking changes:
- refactor validation to standard jb design system validation tool
- disable overflow handler by default add add `overflowHandler` prop so user can enable it when needed

## [2.6.2] - 2024-2-20
### fixed
- - fix value change on arrow key. move it from base on `valueType` to base on `inputType` due to month and day boundary validation
## [2.6.1] - 2024-2-20
### fixed
- fix optional value
## [2.6.0] - 2024-2-20
### new features
- add `gregorianMonthList` and `jalaliMonthList` prop to easily customize month names.
## [2.4.0] - 2023-11-12
### new features
- add Date to valid type for min & max date restriction input
## [2.3.0] - 2023-11-12
### new features
- add placeholder support when input is empty
## [2.2.0] - 2023-10-20
### new features
- add support for `Date` type value
## [2.1.1] - 2023-10-17
### fixed
- fix value PropType to accept `null` value type
## [2.1.0] - 2023-3-7
### new features
- add `JBDateInputEventType` to event type for better event.target detection in typescript
## [2.0.21] - 2023-3-30
### fixed
- fix mandatory React children props
## [2.0.20] - 2023-3-30
### fixed
- fix trigger button bug by updating jb-date-input to v3.7.13
## [2.0.2] - 2023-3-8
### fixed
- fix typescript problems
## [2.0.0] - 2023-3-7
### new features
- convert to typescript
## [1.8.0] - 2023-3-7
### new features
- add auto detect for page rtl or ltr direction.
### fixed
- fix swipe direction base on page direction in rtl pages.

