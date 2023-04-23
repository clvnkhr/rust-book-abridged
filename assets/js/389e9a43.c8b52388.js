"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=s,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const r={},i="11 - Writing Automated Tests",o={unversionedId:"ch11-automated-tests",id:"ch11-automated-tests",title:"11 - Writing Automated Tests",description:"11.1 - How to Write Tests",source:"@site/docs/ch11-automated-tests.md",sourceDirName:".",slug:"/ch11-automated-tests",permalink:"/rust-book-abridged/ch11-automated-tests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch11-automated-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10.3 - Validating References with Lifetimes",permalink:"/rust-book-abridged/ch10/ch10-03-lifetimes"},next:{title:"12 - An I/O Project: Building a Command Line Program",permalink:"/rust-book-abridged/ch12-io-project-cli"}},l={},u=[{value:"11.1 - How to Write Tests",id:"111---how-to-write-tests",level:2},{value:"Checking Results with the assert! Macro",id:"checking-results-with-the-assert-macro",level:3},{value:"Testing Equality with the assert_eq! and assert_ne! Macros",id:"testing-equality-with-the-assert_eq-and-assert_ne-macros",level:3},{value:"Checking for Panics with should_panic",id:"checking-for-panics-with-should_panic",level:3},{value:"Using <code>Result&lt;T, E&gt;</code> in Tests",id:"using-resultt-e-in-tests",level:3},{value:"11.2 - Controlling How Tests Are Run",id:"112---controlling-how-tests-are-run",level:2},{value:"Running Tests in Parallel or Consecutively",id:"running-tests-in-parallel-or-consecutively",level:3},{value:"Showing Function Output",id:"showing-function-output",level:3},{value:"Running a Subset of Tests by Name",id:"running-a-subset-of-tests-by-name",level:3},{value:"Ignoring Some Tests Unless Specifically Requested",id:"ignoring-some-tests-unless-specifically-requested",level:3},{value:"11.3 - Test Organization",id:"113---test-organization",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Submodules in Integration Tests",id:"submodules-in-integration-tests",level:3},{value:"Integration Tests for Binary Crates",id:"integration-tests-for-binary-crates",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"11---writing-automated-tests"},"11 - Writing Automated Tests"),(0,s.kt)("h2",{id:"111---how-to-write-tests"},"11.1 - How to Write Tests"),(0,s.kt)("p",null,"Let's create a new library:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo new adder --lib\n$ cd adder\n")),(0,s.kt)("p",null,"You may notice that the default library project created by cargo has this block in ",(0,s.kt)("em",{parentName:"p"},"src/lib.rs"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"#[cfg(test)]\nmod tests {\n    #[test]\n    fn it_works() {\n        let result = 2 + 2;\n        assert_eq!(result, 4);\n    }\n}\n")),(0,s.kt)("p",null,"This little snippet is generated by cargo for you so you don't need to remember all this boilerplate for generating a test (and perhaps as a gentle nudge to get you to write tests in the first place). This comes with some new syntax we haven't seen before though. First, there's the ",(0,s.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]"),". This is called an ",(0,s.kt)("em",{parentName:"p"},"attribute"),". These are sort of like annotations in languages like Java or in JavaScript."),(0,s.kt)("p",null,"In this case, this is a ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/reference/conditional-compilation.html#the-cfg-attribute"},"configuration attribute")," which tells the compiler that ",(0,s.kt)("inlineCode",{parentName:"p"},"mod tests")," should only be included in the compiled output if the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," configuration is active. This prevents our test code from being shipped as part of our release binary. The ",(0,s.kt)("inlineCode",{parentName:"p"},"#[test]")," attribute marks the ",(0,s.kt)("inlineCode",{parentName:"p"},"it_works")," function as a test case."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!")," macro asserts that the two parameters passed to it are equal. If they are not, ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!")," will panic, causing our test to fail."),(0,s.kt)("p",null,"We can run all tests in this project with ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),". Cargo will run all our tests for us with the built-in test runner and report on any failures. You may notice if you look carefully at the output that there's a section about ",(0,s.kt)("inlineCode",{parentName:"p"},"Doc-tests"),". Rust can actually compile examples in our documentation and run them as tests - we'll learn more about this in ",(0,s.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch14-more-about-cargo#documentation-comments-as-tests"},"chapter 14"),"."),(0,s.kt)("p",null,"We can add a second test to this block that always fails:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'#[cfg(test)]\nmod tests {\n    #[test]\n    fn exploration() {\n        assert_eq!(2 + 2, 4);\n    }\n\n    #[test]\n    fn another() {\n        panic!("Sad trombone");\n    }\n}\n')),(0,s.kt)("p",null,"Any ",(0,s.kt)("inlineCode",{parentName:"p"},"panic!")," in a test will be marked as a failure. That's what ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!")," does if the values aren't equal - it panics."),(0,s.kt)("h3",{id:"checking-results-with-the-assert-macro"},"Checking Results with the assert! Macro"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!")," macro is provided by the standard library. It is much like ",(0,s.kt)("inlineCode",{parentName:"p"},"assert")," in ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3schools.com/python/ref_keyword_assert.asp"},"Python"),", ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assertvalue-message"},"Node.js"),", ",(0,s.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/error/assert"},"C"),", and friends. You pass a condition to assert, if it is true nothing happens, if it is false then it panics."),(0,s.kt)("p",null,"Way back in ",(0,s.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch05-structs",title:"Chapter 5: Using Structs to Structure Related Data"},"chapter 5")," when we were learning about how to write methods, we came up with this example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn can_hold(&self, other: &Rectangle) -> bool {\n        self.width > other.width && self.height > other.height\n    }\n}\n")),(0,s.kt)("p",null,"Here's an example of tests that use ",(0,s.kt)("inlineCode",{parentName:"p"},"assert")," to verify that a larger rectangle ",(0,s.kt)("inlineCode",{parentName:"p"},"can_hold")," a smaller one, and that a smaller one cannot hold a larger one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn larger_can_hold_smaller() {\n        let larger = Rectangle {\n            width: 8,\n            height: 7,\n        };\n        let smaller = Rectangle {\n            width: 5,\n            height: 1,\n        };\n\n        assert!(larger.can_hold(&smaller));\n    }\n\n    #[test]\n    fn smaller_cannot_hold_larger() {\n        let larger = Rectangle {\n            width: 8,\n            height: 7,\n        };\n        let smaller = Rectangle {\n            width: 5,\n            height: 1,\n        };\n\n        assert!(!smaller.can_hold(&larger));\n    }\n}\n")),(0,s.kt)("p",null,"Note that we added ",(0,s.kt)("inlineCode",{parentName:"p"},"use super::*")," to the top of ",(0,s.kt)("inlineCode",{parentName:"p"},"mod tests"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," module is a new module that doesn't inherit anything from the parent scope. This ",(0,s.kt)("inlineCode",{parentName:"p"},"use")," brings all symbols from the parent scope into our scope, so we can reference them without needing to do ",(0,s.kt)("inlineCode",{parentName:"p"},"crate::Rectangle"),"."),(0,s.kt)("p",null,"We can add a custom error message to an ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!")," macro:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'    #[test]\n    fn larger_can_hold_smaller() {\n        let larger = Rectangle {\n            width: 8,\n            height: 7,\n        };\n        let smaller = Rectangle {\n            width: 5,\n            height: 1,\n        };\n\n        assert!(\n            larger.can_hold(&smaller),\n            "Rectangle {:?} should fit inside {:?}",\n            smaller,\n            larger\n        );\n    }\n')),(0,s.kt)("p",null,"This works just like the ",(0,s.kt)("inlineCode",{parentName:"p"},"println!")," marco. There's a format string, and then one or more parameters."),(0,s.kt)("h3",{id:"testing-equality-with-the-assert_eq-and-assert_ne-macros"},"Testing Equality with the assert_eq! and assert_ne! Macros"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assert_eq!")," takes two parameters and asserts that they are equal; if they are equal it will do nothing, if they are not it will panic. ",(0,s.kt)("inlineCode",{parentName:"p"},"assert_ne!"),' asserts that two values are "not equal". Some languages encourage you to make the left-hand parameter be the ',(0,s.kt)("inlineCode",{parentName:"p"},"expected")," and the right be the ",(0,s.kt)("inlineCode",{parentName:"p"},"actual"),", some it's the reverse. Rust doesn't give any special meaning to either value - it just calls them ",(0,s.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"right"),"."),(0,s.kt)("p",null,"If either of these fail, the resulting error message will print the left and right values for you. In order to print them the values you pass in must implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"Debug")," trait. These macros are implemented with the ",(0,s.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"!=")," operators, which means that the values you pass in also need to implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"PartialEq")," trait. Both of these can be derived (see ",(0,s.kt)("a",{parentName:"p",href:"/rust-book-abridged/zz-appendix/appendix-03-derivable-traits"},"appendix C"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'#[derive(PartialEq, Debug)]\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn larger_can_hold_smaller() {\n        let larger = Rectangle { width: 8, height: 7 };\n        let smaller = Rectangle { width: 2, height: 2 };\n\n        // These rectangles are not "equal".\n        assert_ne!(larger, smaller);\n    }\n}\n')),(0,s.kt)("p",null,"Just like ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!"),", we can provide an optional custom message at the end."),(0,s.kt)("h3",{id:"checking-for-panics-with-should_panic"},"Checking for Panics with should_panic"),(0,s.kt)("p",null,"If we have some code that we know should panic in certain conditions, we can verify that it does so with the ",(0,s.kt)("inlineCode",{parentName:"p"},"should_panic")," attribute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'pub struct Guess {\n    value: i32,\n}\n\nimpl Guess {\n    pub fn new(value: i32) -> Guess {\n        if value < 1 {\n            panic!(\n                "Guess value must be greater than or equal to 1, got {}.",\n                value\n            );\n        } else if value > 100 {\n            panic!(\n                "Guess value must be less than or equal to 100, got {}.",\n                value\n            );\n        }\n\n        Guess { value }\n    }\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    #[should_panic]\n    fn greater_than_100() {\n        Guess::new(200);\n    }\n}\n')),(0,s.kt)("p",null,"This test isn't very robust, because if the test panics for some reason other than what we are expecting, the test will still pass. We can fix that by passing a ",(0,s.kt)("inlineCode",{parentName:"p"},"expected")," value to ",(0,s.kt)("inlineCode",{parentName:"p"},"should_panic"),". The test will only pass if the panic message contains the given text."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    #[should_panic(expected = "less than or equal to 100")]\n    fn greater_than_100() {\n        Guess::new(200);\n    }\n}\n')),(0,s.kt)("h3",{id:"using-resultt-e-in-tests"},"Using ",(0,s.kt)("inlineCode",{parentName:"h3"},"Result<T, E>")," in Tests"),(0,s.kt)("p",null,"We've been writing tests that panic when they fail, but we can also write tests that return an error when they fail. This is very handy for testing functions that return a ",(0,s.kt)("inlineCode",{parentName:"p"},"Result")," already, and it also allows the use of the ",(0,s.kt)("inlineCode",{parentName:"p"},"?")," operator in the test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg(test)]\nmod tests {\n    #[test]\n    fn it_works() -> Result<(), String> {\n        if 2 + 2 == 4 {\n            Ok(())\n        } else {\n            Err(String::from("two plus two does not equal four"))\n        }\n    }\n}\n')),(0,s.kt)("p",null,'If we want to do some "negative testing" and verify that a ',(0,s.kt)("inlineCode",{parentName:"p"},"Result")," is an ",(0,s.kt)("inlineCode",{parentName:"p"},"Err")," variant, we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"assert!(value.is_err())"),"."),(0,s.kt)("h2",{id:"112---controlling-how-tests-are-run"},"11.2 - Controlling How Tests Are Run"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," runs tests in parallel. It captures all output from tests and prevents it from being displayed, since any logging inside functions you call would be distracting when you're looking at the list of tests that passed and failed. All of this can be changed though."),(0,s.kt)("p",null,"When you run ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),", you can pass arguments to ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," itself or to the generated test running. If you try running these two commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo test --help\n$ cargo test -- --help\n")),(0,s.kt)("p",null,"You'll see very different output. Anything before the ",(0,s.kt)("inlineCode",{parentName:"p"},"--")," goes to ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),", and anything after to the test runner."),(0,s.kt)("h3",{id:"running-tests-in-parallel-or-consecutively"},"Running Tests in Parallel or Consecutively"),(0,s.kt)("p",null,"By default, tests run in parallel in multiple threads. If two different tests write to the same file or modify the same database, though, you can run into problems where both tests are changing things at the same time. Ideally, well written tests shouldn't do this sort of thing, but you can limit tests to running in a single thread with ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test -- --test-threads=1"),". Your tests will take longer, but won't interfere with each other if they share state."),(0,s.kt)("h3",{id:"showing-function-output"},"Showing Function Output"),(0,s.kt)("p",null,"When running a test, by default all output is captured. Output is only shown for tests that fail. You can run ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test -- --show-output")," to see output from passing tests, as well."),(0,s.kt)("h3",{id:"running-a-subset-of-tests-by-name"},"Running a Subset of Tests by Name"),(0,s.kt)("p",null,"In a large project, running the full test suite can take a while. If you're trying to track down a problem in a specific area, sometimes you just want to run a single test or a small group of tests. If you pass a string to ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),", it will run only tests that include that string in the name of their test function. For example, given these tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"pub fn add_two(a: i32) -> i32 {\n    a + 2\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn add_two_and_two() {\n        assert_eq!(4, add_two(2));\n    }\n\n    #[test]\n    fn add_three_and_two() {\n        assert_eq!(5, add_two(3));\n    }\n\n    #[test]\n    fn one_hundred() {\n        assert_eq!(102, add_two(100));\n    }\n}\n")),(0,s.kt)("p",null,"We can run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'# Run all tests\n$ cargo test\n\n# Run the "one_hundred" test only\n$ cargo test one_hundred\n\n# Run any test with "add" in the name\n$ cargo test add\n')),(0,s.kt)("h3",{id:"ignoring-some-tests-unless-specifically-requested"},"Ignoring Some Tests Unless Specifically Requested"),(0,s.kt)("p",null,"Sometimes we have a test that is expensive to run, or which is failing in some particularly obtuse way but we don't have time to fix the problem right now. We can skip tests with the ",(0,s.kt)("inlineCode",{parentName:"p"},"ignore")," attribute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn it_works() {\n    assert_eq!(2 + 2, 4);\n}\n\n#[test]\n#[ignore]\nfn expensive_test() {\n    // code that takes an hour to run\n}\n")),(0,s.kt)("p",null,"We can run only ignored tests with ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test -- --ignored"),", and we can run all tests (ignored and not-ignored alike) with ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test -- --include-ignored"),"."),(0,s.kt)("h2",{id:"113---test-organization"},"11.3 - Test Organization"),(0,s.kt)("p",null,"In Rust we like to think about ",(0,s.kt)("em",{parentName:"p"},"unit tests")," as focused tests that test a single module at a time, and ",(0,s.kt)("em",{parentName:"p"},"integration tests")," as tests that test the public facing API of your library exactly as external code would, potentially exercising multiple modules and even libraries you depend on."),(0,s.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,s.kt)("p",null,"The convention for unit tests is to add a ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," module with a ",(0,s.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," attribute in each source file, which tests functions and methods found in that file (just as we saw above). Putting the test code immediately alongside the code that it is testing has many advantages."),(0,s.kt)("p",null,'Some people in the testing community are very passionate believers that you should only test the public parts of any module. Some will advocate for the opposite, for testing private functions and methods directly if they are difficult to exercise through the public interface. What constitutes "good practice" is well beyond the scope of this book, but note that a child module can see private members of its parent module, so the ',(0,s.kt)("inlineCode",{parentName:"p"},"tests")," module is free to test private functionality."),(0,s.kt)("h3",{id:"integration-tests"},"Integration Tests"),(0,s.kt)("p",null,"To write integration tests, we create a ",(0,s.kt)("em",{parentName:"p"},"tests")," directory at the top level of our package, next to ",(0,s.kt)("em",{parentName:"p"},"src"),". Cargo treats this as a special folder, and will load each file in ",(0,s.kt)("em",{parentName:"p"},"tests")," and run it as an integration test. Integration tests are completely external to your library, and can only access it's public API exactly like any other consumer. For the \"adder\" crate we've been using as an example in this chapter, we might have a directory structure like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"adder\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 tests\n    \u2514\u2500\u2500 integration_test.rs\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="tests/integration_test.rs"',title:'"tests/integration_test.rs"'},"use adder;\n\n#[test]\nfn it_adds_two() {\n    assert_eq!(4, adder::add_two(2));\n}\n")),(0,s.kt)("p",null,"Much like the ",(0,s.kt)("em",{parentName:"p"},"bin")," folder, each file in the ",(0,s.kt)("em",{parentName:"p"},"tests")," folder is a separate crate, so we need to ",(0,s.kt)("inlineCode",{parentName:"p"},"use")," our library by name in each one. There's also no need for a ",(0,s.kt)("inlineCode",{parentName:"p"},"#[cfg(test)]")," attribute here, since these are only ever compiled when running tests."),(0,s.kt)("p",null,"Integration tests are run alongside unit tests, so to run these we just need to run ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," (although note that if unit tests are failing, integration tests will not be run). We can still limit which integration tests run by passing a function name to ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test"),'. We can also run tests in a single file (for example, in "integration_test.rs") with ',(0,s.kt)("inlineCode",{parentName:"p"},"cargo test --test integration_test"),"."),(0,s.kt)("h3",{id:"submodules-in-integration-tests"},"Submodules in Integration Tests"),(0,s.kt)("p",null,"Let's suppose we're working on a large project with several integration test files. It might be helpful to have some common helper functions to set up tests that we want to share across multiple files, or perhaps some mock data we want to share. You might try putting such code into a ",(0,s.kt)("em",{parentName:"p"},"common.rs")," file and then using ",(0,s.kt)("inlineCode",{parentName:"p"},"mod common"),". The problem here is that ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," will think ",(0,s.kt)("em",{parentName:"p"},"common.rs")," is a test file and will try to run it."),(0,s.kt)("p",null,"To avoid this, we can use the older module naming style we mentioned in ",(0,s.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch07-packages-crates-modules",title:"Chapter 7: Managing Growing Projects with Packages, Crates, and Modules"},"chapter 7")," and put our common code in ",(0,s.kt)("em",{parentName:"p"},"tests/common/mod.rs"),". ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo test")," will not recurse into subdirectories, so it won't run these files as tests."),(0,s.kt)("h3",{id:"integration-tests-for-binary-crates"},"Integration Tests for Binary Crates"),(0,s.kt)("p",null,"If your project only has a binary crate and no library crate, you can't use integration tests to run anything in your project, because you can't ",(0,s.kt)("inlineCode",{parentName:"p"},"use")," anything out of a binary crate. This is another good reason why it's a good idea to put as much of your logic as you can into a library crate, and then create a thin application wrapper around it in your binary crate."),(0,s.kt)("p",null,"Continue to ",(0,s.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch12-io-project-cli",title:"Chapter 12: An I/O Project: Building a Command Line Program"},"chapter 12"),"."))}d.isMDXComponent=!0}}]);