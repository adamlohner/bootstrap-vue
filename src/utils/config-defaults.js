import { deepFreeze } from './object'

// --- General BootstrapVue configuration ---

// NOTES
//
// The global config SHALL NOT be used to set defaults for Boolean props, as the props
// would loose their semantic meaning, and force people writing 3rd party components to
// explicitly set a true or false value using the v-bind syntax on boolean props
//
// Supported config values (depending on the prop's supported type(s)):
// `String`, `Array`, `Object`, `null` or `undefined`

// BREAKPOINT DEFINITIONS
//
// Some components (`<b-col>` and `<b-form-group>`) generate props based on breakpoints,
// and this occurs when the component is first loaded (evaluated), which may happen
// before the config is created/modified
//
// To get around this we make these components' props async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)

// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
//
// We also provide a cached getter for breakpoints, which are "frozen" on first access

// prettier-ignore
export default deepFreeze({
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],

  // Form controls
  formControls: {
    size: undefined
  },

  // Component specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BAvatar: {
    variant: 'secondary',
    badgeVariant: 'primary'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    size: undefined,
    variant: 'secondary'
  },
  BButtonClose: {
    content: '&times;',
    // `textVariant` is `null` to inherit the current text color
    textVariant: undefined,
    ariaLabel: 'Close'
  },
  BCalendar: {
    // BFormDate will choose these first if not provided in BFormDate section
    labelPrevDecade: 'Previous decade',
    labelPrevYear: 'Previous year',
    labelPrevMonth: 'Previous month',
    labelCurrentMonth: 'Current month',
    labelNextMonth: 'Next month',
    labelNextYear: 'Next year',
    labelNextDecade: 'Next decade',
    labelToday: 'Today',
    labelSelected: 'Selected date',
    labelNoDateSelected: 'No date selected',
    labelCalendar: 'Calendar',
    labelNav: 'Calendar navigation',
    labelHelp: 'Use cursor keys to navigate calendar dates'
  },
  BCardSubTitle: {
    // `<b-card>` and `<b-card-body>` also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BCarousel: {
    labelPrev: 'Previous Slide',
    labelNext: 'Next Slide',
    labelGotoSlide: 'Goto Slide',
    labelIndicators: 'Select a slide to display'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    size: undefined,
    variant: 'secondary',
    splitVariant: undefined
  },
  BFormDatepicker: {
    // BFormDatepicker will choose from BCalendar first if not provided here
    labelPrevDecade: undefined,
    labelPrevYear: undefined,
    labelPrevMonth: undefined,
    labelCurrentMonth: undefined,
    labelNextMonth: undefined,
    labelNextYear: undefined,
    labelNextDecade: undefined,
    labelToday: undefined,
    labelSelected: undefined,
    labelNoDateSelected: undefined,
    labelCalendar: undefined,
    labelNav: undefined,
    labelHelp: undefined,
    // These props are specific to BFormDatepicker
    labelTodayButton: 'Select today',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormRating: {
    variant: null,
    color: null
  },
  BFormTag: {
    removeLabel: 'Remove tag',
    variant: 'secondary'
  },
  BFormTags: {
    addButtonText: 'Add',
    addButtonVariant: 'outline-secondary',
    duplicateTagText: 'Duplicate tag(s)',
    invalidTagText: 'Invalid tag(s)',
    placeholder: 'Add tag...',
    tagRemoveLabel: 'Remove tag',
    tagRemovedLabel: 'Tag removed',
    tagVariant: 'secondary'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BFormTimepicker: {
    // Fallback to BTime
    labelNoTimeSelected: undefined,
    labelSelected: undefined,
    labelHours: undefined,
    labelMinutes: undefined,
    labelSeconds: undefined,
    labelAmpm: undefined,
    labelAm: undefined,
    labelPm: undefined,
    // Fallback to BTime then BFormSpinbutton
    labelDecrement: undefined,
    labelIncrement: undefined,
    // These props are specific to BFormTimepicker
    labelNowButton: 'Select now',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormSpinbutton: {
    labelDecrement: 'Decrement',
    labelIncrement: 'Increment'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BInputGroup: {
    size: undefined
  },
  BJumbotron: {
    bgVariant: undefined,
    borderVariant: undefined,
    textVariant: undefined
  },
  BLink: {
    routerComponentName: undefined
  },
  BListGroupItem: {
    variant: undefined
  },
  BModal: {
    titleTag: 'h5',
    size: 'md',
    headerBgVariant: undefined,
    headerBorderVariant: undefined,
    headerTextVariant: undefined,
    headerCloseVariant: undefined,
    bodyBgVariant: undefined,
    bodyTextVariant: undefined,
    footerBgVariant: undefined,
    footerBorderVariant: undefined,
    footerTextVariant: undefined,
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseContent: '&times;',
    headerCloseLabel: 'Close'
  },
  BNavbar: {
    variant: null
  },
  BNavbarToggle: {
    label: 'Toggle navigation'
  },
  BPagination: {
    size: undefined
  },
  BPaginationNav: {
    size: undefined
  },
  BPopover: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: undefined,
    delay: 50,
    variant: undefined
  },
  BProgress: {
    variant: undefined
  },
  BProgressBar: {
    variant: undefined
  },
  BSpinner: {
    variant: undefined
  },
  BSidebar: {
    bgVariant: 'light',
    textVariant: 'dark',
    shadow: false,
    width: undefined,
    tag: 'div'
  },
  BTable: {
    selectedVariant: 'active',
    headVariant: undefined,
    footVariant: undefined
  },
  BTime: {
    labelNoTimeSelected: 'No time selected',
    labelSelected: 'Selected time',
    labelHours: 'Hours',
    labelMinutes: 'Minutes',
    labelSeconds: 'Seconds',
    labelAmpm: 'AM/PM',
    // It would be nice to be able to get these from Intl.DateTimeFormat somehow
    labelAm: 'AM',
    labelPm: 'PM',
    // The following inherit from BFormSpinbutton if not provided
    labelIncrement: undefined,
    labelDecrement: undefined
  },
  BToast: {
    toaster: 'b-toaster-top-right',
    autoHideDelay: 5000,
    variant: undefined,
    toastClass: undefined,
    headerClass: undefined,
    bodyClass: undefined
  },
  BToaster: {
    ariaLive: undefined,
    ariaAtomic: undefined,
    role: undefined
  },
  BTooltip: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: undefined,
    delay: 50,
    variant: undefined
  }
})
