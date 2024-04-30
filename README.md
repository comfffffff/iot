# iot

## 1-1

변수를 선언하면 변수 영역에 식별자로 지정되는 빈 공간이 확보된다

## 1-2

데이터 영역에 할당된 데이터는 변수 영역의 값이 가리키는 주소에 저장된다

## 1-3

숫자, 문자열, boolean, null, undefined, Symbol은 불변값으로 한번 만들어진 값은 변하지 않는다

## 1-4

데이터 영역에 저장된 참조형 데이터는 그 데이터가 가리키는 변수가 변함에 따라 그 값도 변하는 가변값이다

## 1-5

참조형 데이터의 프로퍼티를 재할당할 경우 해당 객체의 변수 영역이 가리키는 데이터 영역이 달라지므로 변수 영역의 값이 바뀐다

## 1-6

객체의 프로퍼티로서 객체가 있는 경우 중첩된 참조가 일어난다

## 1-7

변수의 복사가 일어나는 경우 복사가 일어난 두 변수는 같은 데이터 영역을 가리킨다

## 1-8

복사된 객체의 프로퍼티를 변경하더라도 변수가 가리키는 데이터 영역은 원본 객체와 같다 

## 1-9

복사된 객체 자체를 변경하면 원본 객체와 별개의 데이터 영역을 가리키게 된다

## 1-10

복사된 객체의 프로퍼티만을 수정하여, 원본 객체와 사본 객체가 가리키는 데이터 영역이 같아짐에 따라

원본 객체의 프로퍼티가 달라지는 문제가 발생한다

## 1-11

객체를 통째로 다시 만들어 변수에 저장함으로써 문제를 해결했다

## 1-12

객체의 얕은 복사를 수행한다

## 1-13

1-12에서 만든 객체 복사 함수를 이용해 복사하고, 객체의 불변성을 유지했다

## 1-14

중첩된 객체에 대해 얕은 복사를 수행하면 객체 프로퍼티에 대해 원본의 불변성이 확보되지 않는다

## 1-15

객체의 깊은 복사는 객체 프로퍼티의 내부까지 복사해 원본 객체의 불변성을 유지했다

## 1-16

객체 프로퍼티에 대해 copyObjectDeep 함수를 재귀적으로 호출해 깊은 복사를 범용적으로 실시한다

## 1-17

1-16의 깊은 복사의 결과를 확인한다