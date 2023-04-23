"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[5858],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={},o="12 - An I/O Project: Building a Command Line Program",l={unversionedId:"ch12-io-project-cli",id:"ch12-io-project-cli",title:"12 - An I/O Project: Building a Command Line Program",description:"We know enough Rust now that we can actually write a useful program. We're going to make a copy of the Linux grep command. If you're a Windows user, or you're not much of a command-line person, the grep command basically works like this:",source:"@site/docs/ch12-io-project-cli.md",sourceDirName:".",slug:"/ch12-io-project-cli",permalink:"/rust-book-abridged/ch12-io-project-cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch12-io-project-cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11 - Writing Automated Tests",permalink:"/rust-book-abridged/ch11-automated-tests"},next:{title:"13 - Functional Language Features: Iterators and Closures",permalink:"/rust-book-abridged/ch13-functional-language-features"}},s={},p=[{value:"12.1 - Accepting Command Line Arguments",id:"121---accepting-command-line-arguments",level:2},{value:"12.2 - Reading a File",id:"122---reading-a-file",level:2},{value:"12.3 - Refactoring to Improve Modularity and Error Handling",id:"123---refactoring-to-improve-modularity-and-error-handling",level:2},{value:"Separation of Concerns for Binary Projects",id:"separation-of-concerns-for-binary-projects",level:3},{value:"Extracting the Argument Parser",id:"extracting-the-argument-parser",level:3},{value:"12.4 Developing the Library&#39;s Functionality",id:"124-developing-the-librarys-functionality",level:2},{value:"Using the <code>search</code> Function in the <code>run</code> Function",id:"using-the-search-function-in-the-run-function",level:3},{value:"12.5 - Working with Environment Variables",id:"125---working-with-environment-variables",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"12---an-io-project-building-a-command-line-program"},"12 - An I/O Project: Building a Command Line Program"),(0,a.kt)("p",null,"We know enough Rust now that we can actually write a useful program. We're going to make a copy of the Linux ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," command. If you're a Windows user, or you're not much of a command-line person, the grep command basically works like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ grep [pattern] [filename]\n")),(0,a.kt)("p",null,"We run ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," and give it a pattern and a filename. ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," will read the file, and print out any lines that match the pattern. We'll walk through building this project step-by-step, but if you're the sort of person who likes to read the last page of a book first, you can find the example for this project in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jwalton/rust-book-abridged/blob/master/examples/ch12-minigrep"},"the GitHub repo for this book"),"."),(0,a.kt)("h2",{id:"121---accepting-command-line-arguments"},"12.1 - Accepting Command Line Arguments"),(0,a.kt)("p",null,"We'll start this project, as we start all projects in this book, with cargo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cargo new minigrep\ncd minigrep\n")),(0,a.kt)("p",null,"And we'll kick things off with this quick skeleton of our app in ",(0,a.kt)("em",{parentName:"p"},"src/main.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use std::env;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    // &args[0] is the name of the binary\n    // e.g. target/debug/minigrep\n    let query = &args[1];\n    let file_path = &args[2];\n\n    println!("Searching for {}", query);\n    println!("In file {}", file_path);\n}\n')),(0,a.kt)("p",null,"We call ",(0,a.kt)("inlineCode",{parentName:"p"},"env::args()")," to get an iterator of command line arguments. We ",(0,a.kt)("inlineCode",{parentName:"p"},"use std::env")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"use std::env::args"),", because the convention in rust is to include the name of the the module when calling functions."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"args")," returns an iterator, which we're going to gloss over a bit for now (see ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"chapter 13"),"). Right now what you need to know is that ",(0,a.kt)("inlineCode",{parentName:"p"},"env::args().collect()")," is going to return a collection of all the command line arguments. We have to annotate ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Vec<String>")," type, because ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," here is actually capable of returning different types of collections, and we specify which one we want by annotating the receiving variable! As is standard in most languages, the zeroth ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," is the name of the executable so we skip it."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We could also tell ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," what type to return with the ",(0,a.kt)("em",{parentName:"p"},"turbofish")," operator: ",(0,a.kt)("inlineCode",{parentName:"p"},"::<>"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let args = env::args().collect::<Vec<String>>();\n")),(0,a.kt)("p",{parentName:"admonition"},"We can ",(0,a.kt)("em",{parentName:"p"},"also")," use this syntax to get Rust to infer the generic type of the vector for us:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let args: Vec<_> = env::args().collect();\n"))),(0,a.kt)("p",null,"We can run our program by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo run -- query file.txt\n...\nSearching for query\nIn file file.txt\n")),(0,a.kt)("p",null,"Just like with ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo test"),", everything before the ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," is options for cargo itself, and everything afterwards gets passed through to our executable."),(0,a.kt)("p",null,"Since we don't check the length of ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," here, if you try to run this with less than two command line arguments, it will panic. We'll add some error handling in a minute."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"env::args()")," will also panic if any of the arguments contain invalid unicode. If you find yourself writing a program that needs to accept invalid unicode on the command line, check out ",(0,a.kt)("inlineCode",{parentName:"p"},"std::env::args_os()"),".")),(0,a.kt)("h2",{id:"122---reading-a-file"},"12.2 - Reading a File"),(0,a.kt)("p",null,"In order to read in a file, first we need a file. Create a file called ",(0,a.kt)("em",{parentName:"p"},"poem.txt")," in the root of your project (next to ",(0,a.kt)("em",{parentName:"p"},"Cargo.toml"),") and paste in this text from Emily Dickinson:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="poem.txt"',title:'"poem.txt"'},"I'm nobody! Who are you?\nAre you nobody, too?\nThen there's a pair of us - don't tell!\nThey'd banish us, you know.\n\nHow dreary to be somebody!\nHow public, like a frog\nTo tell your name the livelong day\nTo an admiring bog!\n")),(0,a.kt)("p",null,"Then we can add some code to read the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use std::env;\nuse std::fs;\n\nfn main() {\n    // --snip--\n    println!("In file {}", file_path);\n\n    let contents = fs::read_to_string(file_path)\n        .expect("Should have been able to read the file");\n\n    println!("With text:\\n{contents}");\n}\n')),(0,a.kt)("p",null,"If we run this with ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo run -- test poem.txt"),", it should print out the contents of the poem. Let's split this up into multiple functions and handle some of these error cases correctly."),(0,a.kt)("h2",{id:"123---refactoring-to-improve-modularity-and-error-handling"},"12.3 - Refactoring to Improve Modularity and Error Handling"),(0,a.kt)("h3",{id:"separation-of-concerns-for-binary-projects"},"Separation of Concerns for Binary Projects"),(0,a.kt)("p",null,"We've said this before, but the best way to organize an application is to have a binary crate and a library crate, and make the binary crate call into the library crate. We want as much code as possible in the library crate. This does two things; first it makes it so a third party who wants to use our code could do so without having to call the binary, and second it's much easier to test code in a library crate. We try to keep the binary crate as small as possible so it's obvious that it is correct just from reading it."),(0,a.kt)("p",null,"Our binary crate will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Call the command line parsing logic."),(0,a.kt)("li",{parentName:"ul"},"Set up any configuration (read config files, environment variables)."),(0,a.kt)("li",{parentName:"ul"},"Call a ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," function in ",(0,a.kt)("em",{parentName:"li"},"lib.rs")," and handle any error that ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," returns.")),(0,a.kt)("h3",{id:"extracting-the-argument-parser"},"Extracting the Argument Parser"),(0,a.kt)("p",null,"Let's move all the code for parsing arguments into ",(0,a.kt)("em",{parentName:"p"},"src/lib.rs"),". First, we'll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," struct for holding our configuration. We'll also provide a constructor which builds the config from command line arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'pub struct Config {\n    pub query: String,\n    pub file_path: String,\n}\n\nimpl Config {\n    pub fn build(args: &[String]) -> Result<Config, &\'static str> {\n        if args.len() < 3 {\n            return Err("not enough arguments");\n        }\n\n        let query = args[1].clone();\n        let file_path = args[2].clone();\n\n        Ok(Config { query, file_path })\n    }\n}\n')),(0,a.kt)("p",null,"Here we've defined ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," in such a way that it owns the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"file_path")," strings. We can't directly take ownership of the strings in ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", because the slice passed in owns them and we're only borrowing the slice. To fix this we're calling ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," to make copies of the strings."),(0,a.kt)("p",null,"Cloning the strings is slightly inefficient. In our case we know that ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," will stick around for the entire program, so we could probably use references to the strings in ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", but there'd be some work to manage the lifetimes of the references. Since the length of the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"file_path")," are likely to be quite short, the tradeoff in efficiency is likely going to be small, so this is fine. We'll talk about a better way to handle this situation a bit more in ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"chapter 13")," (hint: we could pass in the iterator itself instead of the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"collect"),")."),(0,a.kt)("p",null,"You may have also noticed that all the constructors we've seen so far have been called ",(0,a.kt)("inlineCode",{parentName:"p"},"new"),", but we called ours ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),". This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," isn't quite a normal constructor. First, by convention the ",(0,a.kt)("inlineCode",{parentName:"p"},"new")," constructor should not be allowed to fail. Second, if you were using this library in some other program where you were providing the arguments directly, you wouldn't want to call ",(0,a.kt)("inlineCode",{parentName:"p"},"Config::new")," and pass in an array of strings, where the first string is ignored. That's a weird interface."),(0,a.kt)("p",null,"Speaking of failures, our ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," function returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<T, E>")," so we can pass errors back to the caller. Since our errors are always constant strings, they'll have static lifetime, so our ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"&'static str"),"."),(0,a.kt)("p",null,"Let's also add a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function to ",(0,a.kt)("em",{parentName:"p"},"src/lib.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"use std::{error::Error, fs};\n\n// --snip--\n\npub fn run(config: Config) -> Result<(), Box<dyn Error>> {\n    let contents = fs::read_to_string(config.file_path)?;\n\n    // TODO: Implement me!\n\n    Ok(())\n}\n")),(0,a.kt)("p",null,"We're returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result<(), Box<dyn Error>>"),". As we saw before ",(0,a.kt)("inlineCode",{parentName:"p"},"Box<dyn Error>")," lets us return any kind of error (and as before, we'll put off covering trait objects until ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch17-object-oriented-features",title:"Chapter 17: Object Oriented Features of Rust"},"chapter 17"),"). Returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," lets us use the ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," operator when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"fs:read_to_string")," to propagate any error it generates up the call stack. Note at the end we're calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok(())")," to return the unit type wrapped inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),". We can't just not return anything, because then we'd implicitly be returning ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),", which doesn't match the declared ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," type."),(0,a.kt)("p",null,"Back in ",(0,a.kt)("em",{parentName:"p"},"src/main.rs")," we'll have to update our code to handle creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," data structure and calling our ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use minigrep::Config;\nuse std::{env, process};\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let config = Config::build(&args).unwrap_or_else(|err| {\n        eprintln!("Problem parsing arguments: {err}");\n        process::exit(1);\n    });\n\n    if let Err(e) = minigrep::run(config) {\n        eprintln!("Application error: {e}");\n        process::exit(1);\n    }\n}\n')),(0,a.kt)("p",null,"First notice that we need to ",(0,a.kt)("inlineCode",{parentName:"p"},"use minigrep::Config")," to bring ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," from the library crate into the binary crate. We don't do this for ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),", because the convention is to use structs directly and use the crate or module name for functions. (If you're wondering why we don't have to ",(0,a.kt)("inlineCode",{parentName:"p"},"use minigrep"),", it's because ",(0,a.kt)("inlineCode",{parentName:"p"},"minigrep")," is a fully qualified top level path like ",(0,a.kt)("inlineCode",{parentName:"p"},"std"),".)"),(0,a.kt)("p",null,"When we call into ",(0,a.kt)("inlineCode",{parentName:"p"},"Config::build"),", we're calling ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrap_or_else")," to handle the error case. This function unwraps the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok"),' variant, "or else" calls into the provided closure (see ',(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"chapter 13"),"), which we're using to print an error message and exit with an error code. When calling ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," we could also have used ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrap_or_else"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," doesn't return a value we want to unwrap, so instead we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"if let...")," syntax."),(0,a.kt)("p",null,"Finally, note the subtle change from our usual ",(0,a.kt)("inlineCode",{parentName:"p"},"println!")," macro. We're using ",(0,a.kt)("inlineCode",{parentName:"p"},"eprintln!")," here instead, which causes our errors to be printed to stderr instead of stdout. If you try running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cargo run > output.txt\nProblem parsing arguments: not enough arguments\n")),(0,a.kt)("p",null,"you should see the error in the terminal, instead of it being sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"output.txt"),"."),(0,a.kt)("h2",{id:"124-developing-the-librarys-functionality"},"12.4 Developing the Library's Functionality"),(0,a.kt)("p",null,"We're going to create a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," that takes a query and the contents of a file, and returns all the matching lines. We're also going to write a test case for this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'pub fn search<\'a>(query: &str, contents: &\'a str) -> Vec<&\'a str> {\n    let mut results = Vec::new();\n\n    for line in contents.lines() {\n        if line.contains(query) {\n            results.push(line);\n        }\n    }\n\n    results\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn one_result() {\n        let query = "duct";\n        let contents = "\\\nRust:\nsafe, fast, productive.\nPick three.\nDuct tape.";\n\n        assert_eq!(vec!["safe, fast, productive."], search(query, contents));\n    }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"one_result")," test calls our search function with a query and some text from a fake file, and makes sure the result contains the only line that contains ",(0,a.kt)("inlineCode",{parentName:"p"},"duct"),". The only thing we haven't seen before is the multi-line string starting with ",(0,a.kt)("inlineCode",{parentName:"p"},'"\\'),"."),(0,a.kt)("p",null,"In the implementation of our search function, we need to split the contents into lines, iterate over the lines, and add each line that matches into our result. We store the results in a vector and return it (passing ownership back up to the parent). Notice the lifetime annotations on ",(0,a.kt)("inlineCode",{parentName:"p"},"search"),". We're telling Rust that the references in the returned vector are only valid for as long as the ",(0,a.kt)("inlineCode",{parentName:"p"},"contents")," string passed in is valid."),(0,a.kt)("h3",{id:"using-the-search-function-in-the-run-function"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h3"},"search")," Function in the ",(0,a.kt)("inlineCode",{parentName:"h3"},"run")," Function"),(0,a.kt)("p",null,"The final piece here is to call into our ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'pub fn run(config: Config) -> Result<(), Box<dyn Error>> {\n    let contents = fs::read_to_string(config.file_path)?;\n\n    for line in search(&config.query, &contents) {\n        println!("{line}");\n    }\n\n    Ok(())\n}\n')),(0,a.kt)("p",null,"We can now try ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo run -- frog poem.txt"),' and it should print out the single line that contains "frog", or ',(0,a.kt)("inlineCode",{parentName:"p"},"cargo run -- body poem.txt")," should print three lines."),(0,a.kt)("h2",{id:"125---working-with-environment-variables"},"12.5 - Working with Environment Variables"),(0,a.kt)("p",null,"We'll add a feature to minigrep to allow it to do case-insensitive matches if the ",(0,a.kt)("inlineCode",{parentName:"p"},"IGNORE_CASE")," environment variable is set. Why an environment variable instead of a command line switch like ",(0,a.kt)("inlineCode",{parentName:"p"},"-i"),"? Because this section is about environment variables."),(0,a.kt)("p",null,"We'll start this out by defining a new function called ",(0,a.kt)("inlineCode",{parentName:"p"},"search_case_insensitive")," in ",(0,a.kt)("em",{parentName:"p"},"src/lib.rs"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"// --snip--\n\npub fn search_case_insensitive<'a>(\n    query: &str,\n    contents: &'a str,\n) -> Vec<&'a str> {\n    let query = query.to_lowercase();\n    let mut results = Vec::new();\n\n    for line in contents.lines() {\n        if line.to_lowercase().contains(&query) {\n            results.push(line);\n        }\n    }\n\n    results\n}\n")),(0,a.kt)("p",null,"This looks a lot like ",(0,a.kt)("inlineCode",{parentName:"p"},"search")," with a few ",(0,a.kt)("inlineCode",{parentName:"p"},"to_lowercase")," added in to handle case sensitivity. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"to_lowercase")," returns a copy of the string rather than editing the original, so after the first line of this function ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," instead of a ",(0,a.kt)("inlineCode",{parentName:"p"},"&str"),". It's worth noting here that ",(0,a.kt)("inlineCode",{parentName:"p"},"to_lowercase")," will handle some basic Unicode - certainly anything in English - but it's not perfect, so if you were implementing this for real you'd probably pull in a crate to handle this."),(0,a.kt)("p",null,"No function is complete without a matching test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn case_sensitive() {\n        // --snip--\n    }\n\n    #[test]\n    fn case_insensitive() {\n        let query = "rUsT";\n        let contents = "\\\nRust:\nsafe, fast, productive.\nPick three.\nTrust me.";\n\n        assert_eq!(\n            vec!["Rust:", "Trust me."],\n            search_case_insensitive(query, contents)\n        );\n    }\n}\n')),(0,a.kt)("p",null,"We'll also update our ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," struct, and update ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," to call our new function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'pub struct Config {\n    pub query: String,\n    pub file_path: String,\n    pub ignore_case: bool,\n}\n\n// --snip--\n\npub fn run(config: Config) -> Result<(), Box<dyn Error>> {\n    let contents = fs::read_to_string(config.file_path)?;\n\n    let results = if config.ignore_case {\n        search_case_insensitive(&config.query, &contents)\n    } else {\n        search(&config.query, &contents)\n    };\n\n    for line in results {\n        println!("{line}");\n    }\n\n    Ok(())\n}\n')),(0,a.kt)("p",null,"And now we get to the good bit - inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Config::build")," we'll check the environment variable and set our new ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore_case")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},'use std::{error::Error, fs, env};\n\n// --snip--\n\nimpl Config {\n    pub fn build(args: &[String]) -> Result<Config, &\'static str> {\n        if args.len() < 3 {\n            return Err("not enough arguments");\n        }\n\n        let query = args[1].clone();\n        let file_path = args[2].clone();\n\n        let ignore_case = env::var("IGNORE_CASE").is_ok();\n\n        Ok(Config {\n            query,\n            file_path,\n            ignore_case,\n        })\n    }\n}\n')),(0,a.kt)("p",null,"You can now give this a try. On Windows, it will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"PS> $Env:IGNORE_CASE=1\nPS> cargo run -- to poem.txt\nPS> Remove-Item Env:IGNORE_CASE\n")),(0,a.kt)("p",null,"On Mac or Linux, you can use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ IGNORE_CASE=1 cargo run -- to poem.txt\n")),(0,a.kt)("p",null,"Continue to ",(0,a.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch13-functional-language-features",title:"Chapter 13: Functional Language Features: Iterators and Closures"},"chapter 13"),"."))}d.isMDXComponent=!0}}]);