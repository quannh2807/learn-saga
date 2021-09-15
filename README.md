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
