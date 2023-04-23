"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="19.2 - Advanced Traits",l={unversionedId:"ch19/ch19-02-advanced-traits",id:"ch19/ch19-02-advanced-traits",title:"19.2 - Advanced Traits",description:"For an introduction to traits, see chapter 10.",source:"@site/docs/ch19/ch19-02-advanced-traits.md",sourceDirName:"ch19",slug:"/ch19/ch19-02-advanced-traits",permalink:"/rust-book-abridged/ch19/ch19-02-advanced-traits",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch19/ch19-02-advanced-traits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"19.1 - Unsafe Rust",permalink:"/rust-book-abridged/ch19/ch19-01-unsafe"},next:{title:"19.3 - Advanced Types",permalink:"/rust-book-abridged/ch19/ch19-03-advanced-types"}},p={},s=[{value:"Specifying Placeholder Types in Trait Definitions with Associated Types",id:"specifying-placeholder-types-in-trait-definitions-with-associated-types",level:2},{value:"Default Generic Type Parameters and Operator Overloading",id:"default-generic-type-parameters-and-operator-overloading",level:2},{value:"Fully Qualified Syntax for Disambiguation: Calling Methods with the Same Name",id:"fully-qualified-syntax-for-disambiguation-calling-methods-with-the-same-name",level:2},{value:"Using Supertraits to Require One Trait\u2019s Functionality Within Another Trait",id:"using-supertraits-to-require-one-traits-functionality-within-another-trait",level:2},{value:"Using the Newtype Pattern to Implement External Traits on External Types",id:"using-the-newtype-pattern-to-implement-external-traits-on-external-types",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"192---advanced-traits"},"19.2 - Advanced Traits"),(0,r.kt)("p",null,"For an introduction to traits, see ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch10/ch10-02-traits"},"chapter 10"),"."),(0,r.kt)("h2",{id:"specifying-placeholder-types-in-trait-definitions-with-associated-types"},"Specifying Placeholder Types in Trait Definitions with Associated Types"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Associated types")," are a bit like generics for traits. Associated types let us define a trait that uses some type without knowing what the concrete type is until the trait is implemented:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Iterator {\n    type Item;\n\n    fn next(&mut self) -> Option<Self::Item>;\n}\n")),(0,r.kt)("p",null,"The implementor is the one that specifies the concrete type of the associated type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// An iterator that returns an unlimited supply of 7s:\nstruct ForeverSevenIterator {}\n\nimpl Iterator for ForeverSevenIterator {\n    // Must fill in the concrete type here.\n    type Item = i32;\n\n    fn next(&mut self) -> Option<i32> {\n        return Some(7);\n    }\n}\n")),(0,r.kt)("p",null,"Although of course if our type is generic, we can use the generic to fill in the associated type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct ForeverIterator<T> {\n    pub val: T,\n}\n\nimpl<T> Iterator for ForeverIterator<T> {\n    type Item = T;\n\n    fn next(&mut self) -> Option<T> {\n        return Some(self.val);\n    }\n}\n")),(0,r.kt)("p",null,"How are associated types and generics different? Why is this not just:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait GenericIterator<T> {\n    fn next(&mut self) -> Option<T>;\n}\n")),(0,r.kt)("p",null,"Well, actually, we ",(0,r.kt)("em",{parentName:"p"},"can")," do this. You can have generic traits, but there's an important difference: a trait with an associated type can only be implemented for a given struct once, but a trait with a generic type could be implemented for a given struct multiple times for different generic types."),(0,r.kt)("p",null,"This means, practically speaking, that if someone implemented ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericIterator")," then whenever we called ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),", we'd have to explicitly annotate the type of the return value so we'd know which version of ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," to call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'struct ForeverSevenIterator {}\n\nimpl GenericIterator<i32> for ForeverSevenIterator {\n    fn next(&mut self) -> Option<i32> {\n        return Some(7);\n    }\n}\n\nimpl GenericIterator<String> for ForeverSevenIterator {\n    fn next(&mut self) -> Option<String> {\n        return Some(String::from("seven"));\n    }\n}\n\nfn main() {\n    let mut iter = ForeverSevenIterator{};\n    // Need to type annotate here, because\n    // `iter.next()` can return an i32 or a string.\n    let v: Option<i32> = iter.next();\n}\n')),(0,r.kt)("p",null,"This isn't a problem for associated types, because we know there can only ever be one ",(0,r.kt)("inlineCode",{parentName:"p"},"impl Iterator for Counter"),"."),(0,r.kt)("h2",{id:"default-generic-type-parameters-and-operator-overloading"},"Default Generic Type Parameters and Operator Overloading"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Operator overloading")," lets you define custom behavior for certain operators. For example, we all understand what happens when we apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator to two ",(0,r.kt)("inlineCode",{parentName:"p"},"i32"),"s. But, what if we want to add two ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),"s together?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Copy, Clone, PartialEq)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nfn main() {\n    assert_eq!(\n        Point { x: 1, y: 0 } + Point { x: 2, y: 3 },\n        Point { x: 3, y: 3 }\n    );\n}\n")),(0,r.kt)("p",null,"Rust lets us define the behavior of the ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," operator by implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ops::Add;\n\nimpl Add for Point {\n    type Output = Point;\n\n    fn add(self, other: Point) -> Point {\n        Point {\n            x: self.x + other.x,\n            y: self.y + other.y,\n        }\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/ops/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"std:ops")," section of the standard library")," describes what operators you can overload this way. If we have a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," trait, it has an ",(0,r.kt)("inlineCode",{parentName:"p"},"Output")," associated item, but the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," trait is also generic, and lets us specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Rhs"),' or "right-hand-side":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"trait Add<Rhs=Self> {\n    type Output;\n\n    fn add(self, rhs: Rhs) -> Self::Output;\n}\n")),(0,r.kt)("p",null,"We didn't specify an ",(0,r.kt)("inlineCode",{parentName:"p"},"Rhs")," above though when we wrote ",(0,r.kt)("inlineCode",{parentName:"p"},"impl Add for Point"),". That's because the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," trait uses a ",(0,r.kt)("em",{parentName:"p"},"default type parameter")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Rhs"),". Since we didn't specify one, it defaulted to ",(0,r.kt)("inlineCode",{parentName:"p"},"Self")," (which in our case is another ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),"."),(0,r.kt)("p",null,"This generic parameter lets us specify what happens when you try to add together two different types. Here's an example where we defined a ",(0,r.kt)("inlineCode",{parentName:"p"},"Millimeters")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Meters")," type, and specify how to add meters to millimeters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ops::Add;\n\nstruct Millimeters(u32);\nstruct Meters(u32);\n\nimpl Add<Meters> for Millimeters {\n    type Output = Millimeters;\n\n    fn add(self, other: Meters) -> Millimeters {\n        Millimeters(self.0 + (other.0 * 1000))\n    }\n}\n")),(0,r.kt)("p",null,"There are two cases where a default type parameter is useful. You can use it to make a non-generic type generic without breaking existing uses, and you can allow customization in places where most users won't need it."),(0,r.kt)("h2",{id:"fully-qualified-syntax-for-disambiguation-calling-methods-with-the-same-name"},"Fully Qualified Syntax for Disambiguation: Calling Methods with the Same Name"),(0,r.kt)("p",null,"If you're like me, the first time you saw that ",(0,r.kt)("inlineCode",{parentName:"p"},"impl TRAIT for TYPE")," syntax, you realized you could have two different traits that each defined a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),", and then you could create a type that implemented both traits."),(0,r.kt)("p",null,"You absolutely can do this. In fact, you can also have a trait that defines a method named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," that differs from a method defined on the struct outside any trait also called ",(0,r.kt)("inlineCode",{parentName:"p"},"foo"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Human")," struct in this next example has three different methods called ",(0,r.kt)("inlineCode",{parentName:"p"},"fly"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'trait Pilot {\n    fn fly(&self);\n}\n\ntrait Wizard {\n    fn fly(&self);\n}\n\nstruct Human;\n\nimpl Pilot for Human {\n    fn fly(&self) {\n        println!("This is your captain speaking.");\n    }\n}\n\nimpl Wizard for Human {\n    fn fly(&self) {\n        println!("Up!");\n    }\n}\n\nimpl Human {\n    fn fly(&self) {\n        println!("*waving arms furiously*");\n    }\n}\n\nfn main() {\n    let person = Human;\n\n    // If there\'s more than one `fly`, and you\n    // don\'t specify the one you want, this\n    // will call the one from the struct.\n    // This prints "*waving arms furiously*".\n    person.fly();\n\n    // We can also call this as:\n    Human::fly(&person);\n\n    // We can explicitly call the `fly` method\n    // from either trait:\n    Pilot::fly(&person);\n    Wizard::fly(&person);\n}\n')),(0,r.kt)("p",null,"When we define these methods, we always have that ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," parameter for the receiver. I like to think of this syntax as calling this like an associated function and explicitly passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"self"),"."),(0,r.kt)("p",null,"Although, this brings up an interesting point. One thing we haven't done yet is to define an associated function on a trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'trait Animal {\n    fn baby_name() -> String;\n}\n\nstruct Dog;\n\nimpl Animal for Dog {\n    fn baby_name() -> String {\n        String::from("puppy")\n    }\n}\n\nfn main() {\n    println!("A baby dog is called a {}", Dog::baby_name());\n}\n')),(0,r.kt)("p",null,"But what happens here if ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog")," has an associated function also called ",(0,r.kt)("inlineCode",{parentName:"p"},"baby_name"),"?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Dog {\n    fn baby_name() -> String {\n        String::from("Spot")\n    }\n}\n')),(0,r.kt)("p",null,'Now this program will print "A baby dog is called a Spot", which is not what we want. We can\'t fix this with ',(0,r.kt)("inlineCode",{parentName:"p"},"Animal::baby_name()")," either, since the compiler won't know whether to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog")," version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal::baby_name()")," or some other version. We might have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat")," concrete type that also implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal")," trait for example, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Animal::baby_name()")," would be ambiguous."),(0,r.kt)("p",null,"Here we can disambiguate with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("A baby dog is called a {}", <Dog as Animal>::baby_name());\n}\n')),(0,r.kt)("p",null,"You could use this same syntax in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Human")," example above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"    <Human as Wizard>::fly(&person);\n")),(0,r.kt)("p",null,"The general syntax is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Type as Trait>::function(receiver_if_method, next_arg, ...)"),", but you can omit any part of this that Rust can work out on it's own."),(0,r.kt)("h2",{id:"using-supertraits-to-require-one-traits-functionality-within-another-trait"},"Using Supertraits to Require One Trait\u2019s Functionality Within Another Trait"),(0,r.kt)("p",null,"Let's say we want to define a trait called ",(0,r.kt)("inlineCode",{parentName:"p"},"OutlinePrint"),". Any type that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"OutlinePrint")," will have a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"outline_print")," that will print the value with a box made of ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"s around it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"**********\n*        *\n* (1, 3) *\n*        *\n**********\n")),(0,r.kt)("p",null,"We can provide a default implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"outline_print"),", but in order to do so we'd have to call into ",(0,r.kt)("inlineCode",{parentName:"p"},"self.to_string()"),", which means that ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," has to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt:Display"),"."),(0,r.kt)("p",null,"We can write this trait like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fmt;\n\ntrait OutlinePrint: fmt::Display {\n    fn outline_print(&self) {\n        let output = self.to_string();\n        let len = output.len();\n        println!("{}", "*".repeat(len + 4));\n        println!("*{}*", " ".repeat(len + 2));\n        println!("* {} *", output);\n        println!("*{}*", " ".repeat(len + 2));\n        println!("{}", "*".repeat(len + 4));\n    }\n}\n')),(0,r.kt)("p",null,"We say here that ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt::Display")," is a ",(0,r.kt)("em",{parentName:"p"},"supertrait")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"OutlinePrint"),". This is kind of like adding a trait bounds to ",(0,r.kt)("inlineCode",{parentName:"p"},"OutlinePrint")," - saying that in order to implement OutlinePrint, your type also has to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt::Display"),"."),(0,r.kt)("p",null,"We can implement this on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::fmt;\n\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nimpl fmt::Display for Point {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, "({}, {})", self.x, self.y)\n    }\n}\n\nimpl OutlinePrint for Point {}\n')),(0,r.kt)("h2",{id:"using-the-newtype-pattern-to-implement-external-traits-on-external-types"},"Using the Newtype Pattern to Implement External Traits on External Types"),(0,r.kt)("p",null,"Back in ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch10/ch10-02-traits#implementing-a-trait-on-a-type"},"chapter 10"),', we mentioned the "orphan rule". If you want to implement a trait on a type, then either the trait or the type (or both) need to be defined locally in your crate.'),(0,r.kt)("p",null,"It's possible to get around this using the ",(0,r.kt)("em",{parentName:"p"},"newtype"),' pattern. The basic idea is to create a tuple "wrapper" around the existing type. Let\'s suppose we want to implement ',(0,r.kt)("inlineCode",{parentName:"p"},"Display")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec<T>"),". These are both from the standard library, so normally we couldn't do this. We'll use the newtype pattern here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use std::fmt;\n\nstruct Wrapper(Vec<String>);\n\nimpl fmt::Display for Wrapper {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, "[{}]", self.0.join(", "))\n    }\n}\n\nfn main() {\n    let w = Wrapper(vec![String::from("hello"), String::from("world")]);\n    println!("w = {}", w);\n}\n')),(0,r.kt)("p",null,"The disadvantage to this approach is that we have a new type ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper")," here, and we can't just treat ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," like we could a regular vector. Most of the methods we want to call on ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," aren't defined on Wrapper. We could redefine just the methods we want to call on ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrapper"),". We could also implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deref")," trait so we can treat a ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," like vector."))}m.isMDXComponent=!0}}]);