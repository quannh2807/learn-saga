# 🎉 Redux Toolkit + Saga + Typescript 🔥

- [🎉 Redux Toolkit + Saga + Typescript 🔥](#-redux-toolkit--saga--typescript-)
  - [Redux Saga: 01 - Giới thiệu tổng quan về saga 🎉](#redux-saga-01---giới-thiệu-tổng-quan-về-saga-)
  - [Redux Saga: 02 - Các khái niệm cần biết trong Redux Saga 🔥](#redux-saga-02---các-khái-niệm-cần-biết-trong-redux-saga-)
      - [Effect](#effect)
      - [Task](#task)
      - [Blocking/Non-blocking call](#blockingnon-blocking-call)
      - [Watcher/Worker](#watcherworker)
  - [Redux Saga: 03 - Setup project dùng Typescript, Redux Toolkit và Create React App 🚀](#redux-saga-03---setup-project-dùng-typescript-redux-toolkit-và-create-react-app-)
  - [Redux Saga: 04 - Add Redux Saga vào Redux Toolkit 🎉](#redux-saga-04---add-redux-saga-vào-redux-toolkit-)
  - [Redux Saga: 05 - Những effect creators phổ biến nên biết 🎉](#redux-saga-05---những-effect-creators-phổ-biến-nên-biết-)
  - [Redux Saga: 06 - Phân biệt takeEvery và takeLatest 😊](#redux-saga-06---phân-biệt-takeevery-và-takelatest-)
  - [Redux Saga: 07 - Viết Saga thế nào cho dễ test? 🤔](#redux-saga-07---viết-saga-thế-nào-cho-dễ-test-)
  - [Redux Saga: 08 - Phân biệt fork và spawn 🤔](#redux-saga-08---phân-biệt-fork-và-spawn-)
  - [Redux Saga 10: API cho dự án quản lý học sinh.](#redux-saga-10-api-cho-dự-án-quản-lý-học-sinh)
  - [Redux Saga: 14 - Setup routings with react router dom typescript](#redux-saga-14---setup-routings-with-react-router-dom-typescript)
      - [Mini Project - Student Management](#mini-project---student-management)
        - [fetures](#fetures)
  - [Redux Saga: 15 - Add Material UI library to reactjs typescript](#redux-saga-15---add-material-ui-library-to-reactjs-typescript)
  - [Redux Saga: 16 - Setup slice to handle login in redux toolkit](#redux-saga-16---setup-slice-to-handle-login-in-redux-toolkit)
  - [Redux Saga: 17 - Cài đặt 2 tasks login và logout](#redux-saga-17---cài-đặt-2-tasks-login-và-logout)
  - [Redux Saga: 18 - Phân tích cách xử lý navigation trong redux saga](#redux-saga-18---phân-tích-cách-xử-lý-navigation-trong-redux-saga)
      - [Có 3 cách giải quyết bài toán](#có-3-cách-giải-quyết-bài-toán)
  - [Redux Saga: 19 - Add connected react router package](#redux-saga-19---add-connected-react-router-package)
  - [Redux Saga: 20 - Phân tích cách xử lý loading và error](#redux-saga-20---phân-tích-cách-xử-lý-loading-và-error)
  - [Redux Saga: 21 - Admin Layout với CSS Grid and Material UI](#redux-saga-21---admin-layout-với-css-grid-and-material-ui)
  - [Redux Saga: 23 - Phân tích tính năng trang Dashboard](#redux-saga-23---phân-tích-tính-năng-trang-dashboard)
  - [Redux Saga: 24 - Cài đặt slice cho trang dashboard](#redux-saga-24---cài-đặt-slice-cho-trang-dashboard)
  - [Redux Saga: 28 - Giới thiệu tính năng Student Management](#redux-saga-28---giới-thiệu-tính-năng-student-management)
    - [Routings](#routings)
    - [LISTING](#listing)
    - [ADD/EDIT](#addedit)
  - [Redux Saga: 29 - Cài đặt slice và saga cho feature Student](#redux-saga-29---cài-đặt-slice-và-saga-cho-feature-student)
  - [Redux Saga: 38 - Setup trang Add/Edit Student](#redux-saga-38---setup-trang-addedit-student)

## Redux Saga: 01 - Giới thiệu tổng quan về saga 🎉

-   Redux
-   JS/ES6 Generator:
    -   [Generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

> The function\* declaration (function keyword followed by an asterisk) defines a generator function, which returns a [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator) object.

    -  Generator có 3 hàm:
        next()
        return()
        throw()

```
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

## Redux Saga: 02 - Các khái niệm cần biết trong Redux Saga 🔥

#### Effect

#### Task

#### Blocking/Non-blocking call

#### Watcher/Worker

## Redux Saga: 03 - Setup project dùng Typescript, Redux Toolkit và Create React App 🚀

## Redux Saga: 04 - Add Redux Saga vào Redux Toolkit 🎉

-   Serializable

## Redux Saga: 05 - Những [effect creators](https://redux-saga.js.org/docs/api/#effect-creators) phổ biến nên biết 🎉

-   Effect: js object chứa thông tin để saga middleware biết phải cần phải làm gì
-   Effect creators: func trả về một Effect. Và nó không thực thi Effect này, saga middleware sẽ thực thi.

| #   | Effect creators                     | làm gì |
| --- | ----------------------------------- | ------ |
| 1   | takeEvery(pattern, saga, ...args)   |        |
| 2   | takeLatest(pattern, saga, ...args)  |        |
| 3   | takeLeading(pattern, saga, ...args) |        |
| 4   | put(action)                         |        |
| 5   | call(fn, ..args)                    |        |
| 6   | all([...effects])                   |        |
| 7   | take(pattern) and fork(fn, ...args) |        |
| 8   | throttle                            |        |
| 9   | debounce                            |        |
| 10  | retry                               |        |

## Redux Saga: 06 - Phân biệt takeEvery và takeLatest 😊

## Redux Saga: 07 - Viết Saga thế nào cho dễ test? 🤔

> call()
> Gọi hàm async có thể yield trực tiếp hàm, hoặc đặt trong call()

## Redux Saga: 08 - Phân biệt fork và spawn 🤔

[saga's fork model](https://redux-saga.js.org/docs/advanced/ForkModel)

fork
spawn

## Redux Saga 10: API cho dự án quản lý học sinh.

REST client

## Redux Saga: 14 - Setup routings with react router dom typescript

#### Mini Project - Student Management

##### fetures

-   auth / authentication:

    -   login
    -   register
    -   forget password

-   admin: layout - components

-   admin/dashboard

-   admin/students

## Redux Saga: 15 - Add Material UI library to reactjs typescript

## Redux Saga: 16 - Setup slice to handle login in redux toolkit

CLICK LOGIN

-   Call api to login
-   Success -> redirect admin
-   Failed -> show Error

authSaga

-   if logged in, watch LOGOUT
-   else watch LOGIN

LOGIN

-   call login API to get token + user info
-   set token to local storage
-   -redirect to admi page

LOGOUT

-   clear token from localstorage
-   redirect to login page

## Redux Saga: 17 - Cài đặt 2 tasks login và logout

## Redux Saga: 18 - Phân tích cách xử lý navigation trong redux saga

#### Có 3 cách giải quyết bài toán

-   Theo dõi redux store và đặt redirect trong một component
    -   Hạn chế sẽ phải đặt flag để check login hay chưa

```
function App() {
  const logginSuccess = useAppSelector(state => state.auth.loginSuccess)

  useEffect(() => {
    if (logginSuccess) {
      // redirect router
    }
  }, [logginSuccess])
}
```

--> Flow is fragmented, hard to control when you have more and more state

-   Using callbacks
    -   This approach using no-serializable (callback) in action and dispatch to redux store which is **NOT RECOMMEND** BY Redux Toolkit

```
function App() {
  const dispatch = useAppDispatch()

  const handleLoginSubmit = (values) => {
    dispatch(authActions.login({
      ...values.
      onSuccess: () => { history.push('/admin') },
      onError: () => { console.log('Notify error to user') },
    }))
  }

  // ...
}
```

-   Using connected-react-router
    -   Sync routings to redux.
    -   Navigate by dispatching an action to redux store.
    -   One thing to make sure, when route changes, it doesn't cause re-render our components.

--> connected-react-route + custom history.

## Redux Saga: 19 - Add [connected react router package](https://github.com/supasate/connected-react-router)

## Redux Saga: 20 - Phân tích cách xử lý loading và error

-   RTK + Thunk: provide a way to await an async action right on component
    --> Handle loading/error on component easily

-   RTK + Saga: doesn't have a way to do so
    --> what to do?

-   Considerations:
    -   Trigger error toast from Saga
    -   Consider to call API directly on component instead of going through saga.

## Redux Saga: 21 - Admin Layout với CSS Grid and Material UI

## Redux Saga: 23 - Phân tích tính năng trang Dashboard

**Dashboard state**

-   loading
-   statistics
    -   maleCount
    -   femaleCount
    -   highMarkCount
    -   lowMarkCount
-   highestStudentList
-   lowestStudentList
-   rakingByCityList
    -   hcm: []
    -   hn: []
    -   ...

## Redux Saga: 24 - Cài đặt slice cho trang dashboard

## Redux Saga: 28 - Giới thiệu tính năng Student Management

### Routings

-   /admin/students: listing
-   /admin/students/add
-   /admin/students/edit/:studentId

### LISTING

-   Search by name
-   Filter by city
-   Sort by name, mark
-   Pagination

### ADD/EDIT

-   React hook form V7
-   Yup

## Redux Saga: 29 - Cài đặt slice và saga cho feature Student

## Redux Saga: 38 - Setup trang Add/Edit Student

STUDENT FORM

-   Mode: add/edit
-   Initial value
-   Values:
    -   name: Text Input
    -   age: Number Input
    -   gender: Radio options
    -   city: Select
    -   mark: Number Input
-   Validations: all required
    -   name: at least two words
    -   age >= 18
    -   gender: male / female
    -   city
    -   mark: 0 -> 10
-   Submition: redirect to student list page after submitting successfully
