---
author: ugh
comments: false
date: 2018-10-27 13:13:09+00:00
layout: book.hbs
link: https://fluidself.org/books/science/the-software-craftsman/
slug: the-software-craftsman
title: 'The Software Craftsman: Professionalism, Pragmatism, Pride - by Sandro Mancuso'
---

**Part I. Ideology and Attitude**

Agile methodologies are all about quick and short feedback loops. The quicker and shorter our feedback loop is, the more agile we can become. Every time we receive some feedback, we have an opportunity to react to it, and the act of reacting (or not) to new information is what makes us more (or less) agile. Narrowing the feedback loop helps us to make problems visible sooner, allowing us to inspect and adapt quickly. Agile does not solve any problems; it exposes them.

**Software Craftsmanship**

In a very simplistic way, we can say that Software Craftsmanship is a better metaphor for software development than software engineering. Software Craftsmanship sees software as a craft and compares software developers to medieval blacksmiths.

Software craftsmanship is a long journey to mastery. It’s a mindset where software developers choose to be responsible for their own careers, constantly learning new tools and techniques and constantly bettering themselves. Software Craftsmanship is all about putting responsibility, professionalism, pragmatism, and pride back into software development.

**The Manifesto**

As aspiring Software Craftsmen we are raising the bar of professional software development by practicing it and helping others learn the craft. Through this work we have come to value the following:

- Not only working software, but also **well-crafted software**
- Not only responding to change, but also **steadily adding value**
- Not only individuals and interactions, but also a **community of professionals**
- Not only customer collaboration, but also **productive partnerships**

That is, in pursuit of the items on the left we have found the items on the right to be indispensable.

**Not Only Working Software, but Also Well-Crafted Software**

Well-crafted software means that, regardless of how old the application is, developers can understand it easily. The side effects are well known and controlled. It has high and reliable test coverage, clear and simple design, and business language well expressed in the code. Adding or changing features does not take longer than it used to take at the beginning of the project, when the code base was small. The code must be maintainable and predictable. Developers must know what is going to happen when changing the code and must not be afraid to change it. Changes should be localized and not affect other parts of the application—no ripple effects. In a few minutes, if not seconds, after pressing a button, tests will check the entire application and inform you if there is something broken.

**Not Only Responding to Change, but Also Steadily Adding Value**

When we talk about steadily adding value, we are not just talking about adding new features and fixing bugs. This is also about constantly improving the structure of the code, keeping it clean, extendable, testable, and easy to maintain. A paraphrase of a Boy Scout rule (first applied to software by Uncle Bob) states that we should always leave the code cleaner than we found it.

**Not Only Individuals and Interactions, but Also a Community of Professionals**

The best way to move our industry forward is by sharing what we learned through mentoring and inspiring lessexperienced developers. This is also related to the idea of apprentices, journeymen, and masters, where Software Craftsmanship masters will mentor apprentices and help them in their journey. Knowledge, ideas, successes, and failures must be shared and discussed within the community in order to move our industry forward.

Learning from each other is by far the best way for us to become better. Writing blogs, contributing to open source projects, making our code publicly available, becoming part of our local communities, and pairing with other developers are some of the ways we can contribute to the greater good of our industry.

**Not Only Customer Collaboration, but Also Productive Partnerships**

Software craftsmen are not factory workers. We want to actively contribute to the success of the project, questioning requirements, understanding the business, proposing improvements, and productively partnering with our customers or employers. This is a different approach to the traditional employer/employee model and the advantages for the employers are enormous. A highly motivated team has a much bigger chance to make any project succeed. Passionate and talented people want to succeed and will always find ways to overcome problems and bureaucracy.

**The Software Craftsmanship Attitude**

We all want to be treated and respected as software professionals but before we achieve that we need to start behaving like professionals. That means that we should use our own time and money to get better at what we do. We should own our own careers and be in control of what we learn and when we learn. We should be in a position that we can help our clients and employers to achieve their goals. Developers who rely only on their companies to provide them knowledge are not professional software developers. They are just factory workers in disguise.

Take one day a week and try to get to a coffee shop one or two hours before you start working. Use this time to write code, read a technical book, blogs, or whatever you think you need to do to learn and move your career forward. Lunchtime is another great opportunity we have to practice and learn something new. Once or twice a week just grab a sandwich and your laptop, and go somewhere quiet. It is amazing what we can do in such a small period of time when we are focused.

In order to use our time outside working hours wisely, it is extremely important that we focus. A good technique is to decide beforehand what we want to do before we actually use this time slot. It is like deciding the agenda before scheduling a meeting. It does not need to be strict, but we need at least to have a good idea of what we want to achieve. Once this is done, we must ensure we can focus and get it done. One way we can achieve this is by using the **Pomodoro technique**. There are five basic steps to implement this technique:

1. Decide on the task to be done.
2. Set the Pomodoro (timer) to 25 minutes.
3. Work on the task until the timer rings.
4. Take a short break (normally 5 minutes).
5. Every four “Pomodoros,” take a longer break (15–30 minutes).

During a Pomodoro (25 minutes), we focus on the task and nothing else. We should do whatever we can to finish the Pomodoro with no interruptions but in case it needs to be interrupted (there is an important call we need to take or we really need to speak to someone), then the Pomodoro must be terminated and not paused.

**Working Software**

Code is organic, not mechanical. Like a garden, code needs constant maintenance. For a garden to look beautiful all year round, we need to look after its soil, constantly remove weeds, regularly water it, remove some dead plants, plant new ones, and trim or rearrange existing ones so they can stay healthy, looking nice and whole. With basic and regular maintenance, the garden will always look great but if we neglect it, even for a short period of time, it will require much more effort to make it look good again. The longer we neglect it, the harder we will need to work to bring it to a state we can enjoy again. Code is no different. If we don’t look after it constantly, the code starts to deteriorate as changes and new features are added. Bad design choices, lack of tests, and poor use of languages and tools will make the code rot faster. Gradually, other parts of the code will also be contaminated up to the point that the whole code base is extremely ill, making it painful and costly to maintain it.

When looking at legacy code, instead of moaning and getting frustrated, we should try to understand it and make it better, constantly applying the Boy Scout rule of making it better than how we found it. Improving and understanding legacy code can be massively rewarding. The process of trying to make sense of a big ball of mud seems daunting, but if we just focus on small parts of it, one at a time, and start improving them (writing tests, extracting methods and classes, renaming variables, etc.), gradually things become much easier and enjoyable. Working with legacy code is almost like solving a big jigsaw puzzle. We don’t put all the small pieces together at the same time. We start by separating the pieces into groups, often starting with the corners and edges and then separating the other small pieces by color, pattern, and so forth. Once this is done, we have a few smaller groups and we start forming a high-level model in our head. What before was a bunch of random pieces (or a big ball of mud) is now a bunch of smaller groups of not-so-random pieces. It is still not very helpful or encouraging, but nonetheless some progress is made. Bit by bit, we start working on one of these groups (parts of the code) and we start putting some pieces together (writing tests for the existing code, which will help with our understanding of the code, and refactoring it). Once we start putting some pieces together, we start seeing a small part of our picture. We get excited because now it’s getting real. It’s starting to make sense and we are happy we are making progress. The more pieces we put together, the more excited we get about finishing the jigsaw puzzle. The more pieces we put together, the easier it gets to put the remaining pieces together. And that’s exactly the feeling we have when working with legacy code. For every piece of code we make better, the more we want to make the whole code better. The feeling of achievement is really rewarding.

**Technical Practices**

- **Automated Testing:** Automated testing enables us, with a click of the button, to have our entire system tested within a few minutes. It gives us confidence to deploy our application into production minutes after the last change was made. The amount of time the business can save avoiding long quality assurance (QA) phases can be measured in days, if not weeks. The feedback loop on the correctness of our code is reduced from weeks to minutes, enabling us to correct any mistakes almost immediately. This reduction in the feedback loop also prevents us from writing more code on top of erroneous code—reducing significantly the overall bug-fixing cost.

- **Test-Driven Development:** Although TDD has “test” in its name, TDD is actually a design practice. When test-driving our code, it becomes very difficult to write complex code. First, because we write just enough code to satisfy the requirements—represented as tests —we discourage overengineering and big design up front (BDUF). Second, whenever our code becomes a bit too complex and bloated, it also becomes difficult to test. Complexity in our code and bad design choices are highlighted by the complexity in maintaining and writing new tests. These tests lead us to re-analyze the design of our code and refactor to make it simpler

- **Continuous Integration:** Every time a developer commits some code, the entire suite of tests is executed and an email is sent to the entire team whenever a test fails. This practice needs to be combined with a “stop and fix” attitude: members of the team must stop whatever they are doing to fix a broken build, which means the problem introduced by the latest change. The advantage of following this practice is that the system is always in a deployable condition and problems don’t accumulate.

- **Refactoring:** The Boy Scout rule says: “Always leave the campground cleaner than you found it.” This is a value that every software craftsman must have when it comes to code. Refactoring without pragmatism can be a dangerous practice. Being professional means to understand trade-offs. Although we want to make the whole system better, we may not need to. There is no point in refactoring a piece of code that hasn’t been changed in years. If we don’t need to change it, chances are we should not be refactoring either. Start refactoring what changes more often. The Boy Scout rule should just be applied when we need to make a change or understand one area of the code, not everywhere

**The Long Road**

When we are not so sure where we want to go with our careers, we need to start opening doors. We need to create situations where opportunities can be presented to us. No one will knock on our doors and offer us a great opportunity if we keep ourselves isolated from the rest of the world, locked inside our houses and offices. No one will offer us a good opportunity if they don’t know who we are, what we do, and, most important, how good we are. We need to go out there and speak to people. We need to show other people what we can do. We need to be available. We need to make people feel comfortable to come and speak to us. If we don’t know what we want to do next, create an environment where other people and companies can present you with some options. Once you have a few doors open, and a few options available to you, you will be in a better place to decide what to do next.

When it comes to our career, there is no right or wrong. But there is something worth keeping in mind: knowledge is forever; money, stability, and security are not. If, for whatever reason, our job is terminated, knowledge and experience are the only things we will take with us. If we always focus on learning and becoming better software craftsmen, finding jobs that can provide us with a good income, stability, and security will always be a much simpler task than if we had spent our careers just focusing on getting more money.

**Part II. A Full Transformation**

**Interviewing Software Craftsmen**

A good interview is like a good and informal chat between passionate developers. It’s an exchange of information: a good debate about techniques, tools, challenges, and approaches to software development.

Recruiting the first developers for a new project is slightly different from recruiting for an existing project. When recruiting for an existing team, I look for passion, positive attitude toward the way we work and a good foundation in software development such as TDD, refactoring, clean code, and design. Everything else —specific languages, frameworks, and tools—is secondary. I know that if the candidate has a good foundation, she will learn whatever technologies we use in no time. When recruiting the first developers for a new project, besides the passion and a good software development foundation, we should aim to have at least two (maybe one if a small project) experienced developers with a good track record of delivering projects. Dealing with the client’s bureaucracy, business pressure, production issues, and stakeholders’ management are things that cannot be learned while coding a pet project or in our spare time. These are things that we just learn when we are actively involved in delivering software for real customers

**Interview Anti-Patterns**

- **Don’t Be a Smart-Ass Interviewer:** Don’t try to make yourself look smarter and better than the candidate. Don’t intimidate the candidate by putting her in a tough situation just for your pleasure. Don’t try to impress the candidate with your job title, responsibilities, and skills. Don’t talk to the candidate as if you were the most powerful person in the world. Simply put, don’t be an ass. Don’t try to look smart by asking tricky and irrelevant questions. Experienced and talented developers will notice it straightaway and won’t be very inclined to work with you. Just be honest and humble. Treat candidates like fellow professional developers, and conduct the interview as if you were having a great technical conversation with someone you respect. Most important, listen to the candidates and keep your mind open. You may actually learn a few things.

- **Don’t Use Brainteasers**

- **Don’t Ask Questions to Which You Don’t Know the Answers**

- **Don’t Try to Make the Candidate Look Like a Fool**

- **Don’t Code on a Piece of Paper**

- **Don’t Use Algorithms:** If the main problems we have in our system are not about algorithms, we should not use them in our coding interviews. We should focus on giving candidates exercises where they need to design a solution and express the business domain. If we need developers with good skills in Test-Driven Development and design, we should use exercises that reflect that.

**Culture of Learning**

- **Start a Book Club:** Pick a book and tell your colleagues you will start reading it. Tell them what the book is about and check if anyone is interested in having a discussion about it once a week at lunchtime—or any other suitable time slot. If at least one other developer is interested, you are ready to start. If no one is interested, start reading the book you want, but take the time to share what you are learning during informal conversations. Maybe some of the developers who initially were not interested will change their minds and join you.

- **Encourage Pet-Project Time:** Passionate developers love to have a playground where they can try many new ideas, technologies, and techniques. Ask around. See who has a pet project or is interested in starting one. Make the introductions and organize some time where developers can work on their own thing. If it is not possible to do that during working hours, try early in the morning, lunchtime, or evenings.

- **Be an Example**

- **Focus on Those Who Care:** Not everyone will be moved by your enthusiasm and willingness to change. Focus on the ones who are willing to change. Pair with them. Write tests and review each other’s code. Engage in good conversations; share ideas and information. Have fun with them. Once a few people are having fun, working well together, and using different techniques and approaches, more people will want to join.

**Driving Technical Changes**

**Encourage simplicity:** Your idea or proposal must be simple and clear. Organize your thoughts before proposing anything. Make it very easy for people to understand; use examples whenever possible. The ability to communicate well is key if you want to have your ideas accepted. Speak the same language. Depending on which changes you are proposing, you may need to speak to developers, managers, architects, sponsors, product owners, business analysts, or any other person who can be affected by them. Learn how to speak their language. Don’t try to talk about details of your code or frameworks with managers or product owners. Instead, tell them about the benefits that your proposal has for the project: reducing maintenance costs, more reliable and frequent releases, and so on. Do your homework. Make sure you understand what you are talking about. Research, try, and practice. Think about what questions the skeptics would ask, and make sure you have an acceptable answer before you speak to them. If your proposal has any drawbacks, mention them before anyone else does. If you feel that there are areas where you don’t know enough, be clear about that. Being clear about the drawbacks shows that you thought hard about the problem and increases your credibility. Be respectful. Don’t treat people as if they were stupid. Disrespect and aggression will immediately put people in a defensive mode, making the task of convincing them almost impossible. Learn how to listen. You may have a very good idea of how things should be done, but make no mistake, you are not the only one with an idea. Everyone has an opinion and sees the same problems from different angles. Probably, there are many things you are not even aware of. Listen and digest what everyone has to say before you make any judgment.

**Gain Expertise:** Before proposing a new technology, make sure you really understand it. Play with it, build something with it, talk to experts, and compare it to other similar technologies. Make sure you can do what you need to do with it and, above all, that you can teach it to others. There aren’t many people out there willing to use their spare time to become an expert in a new technology or to master a new practice. However, that doesn’t mean that they don’t want to learn them. You can speed up their learning curve if you go through the learning curve yourself and teach them.

**How Do I Convince My Manager?** The simple answer is you don’t. It’s easier to ask for forgiveness than to get permission. Just go there and do it. When it comes to technical practices, why would your manager care anyway? Managers want projects delivered on time, on budget, and with no bugs, and they want to make stakeholders and clients happy. Who cares if we use TDD, if we pair, or have continuous integration? Besides us, no one.

We are expected to deliver quality software. We are expected to deliver good solutions. So, when it comes to TDD, pair programming, continuous integration, or any other practice you think can help you to achieve that, just do it. Don’t ask for authorization. Don’t ever put a task card on the board called “unit testing.” A unit test is not a task. You cannot say that a coding task is done if you still have a pending “unit test” task for that code. Don’t split coding tasks into two tasks: one hour to code this service class and another hour to write unit tests. They are not separate tasks. In this case, you just have a single two-hour task to implement a service class that works. Testing, regardless of which type, is part of the coding task and not a separate thing. Whatever you do, make sure you deliver value to your customers. Be transparent and honest about your progress but, unless they ask, don’t keep highlighting all the minor details about how you are implementing your code—it’s not important. I’m not saying you should lie or hide anything. I’m just saying that telling your manager that you will take a specific amount of time to refactor your code or write unit tests is totally pointless. Who cares? What is important for managers is when you are going to be done, and by done we mean provide code that works according to the business specification and is in production (or ready for user acceptance testing). Tests and refactoring are part of any coding task. The more technical details you expose, the more managers feel they should micromanage you.

Real software professionals understand that responsibility should always come with accountability. If you want to be responsible, be prepared to be accountable. If you are accountable, make sure you are also responsible for the decisions

**Pragmatic Craftsmanship**

When working with legacy code, we should always leave at least the area of code we changed cleaner than we found it. Whenever I need to add a new feature to the code, I usually study the code a little bit and refactor it (if needed) so it can accept the new feature more easily and gracefully. Refactoring the code before adding a new feature is a good idea when the impact on the code is significant. Before adding any feature I ask myself: is the code ready to receive this new feature? How many places do I need to change in order to add this new feature? If the answers to these two questions are “no” and “many,” I will first refactor the code to prepare it for the new feature. I change the code in a way that would make it easy to simply slide the new feature in, without opening (or changing) existing behavior, minimizing the impact the new feature will have on the code.

Any stupid developer can make things work. What distinguishes great and mediocre developers is how they make things work. Great developers write simple code that satisfies the business requirements, and less-experienced developers have no problem understanding it. Solving the problem with a simple and elegant solution is far harder than solving it with a complex and overengineered one. I believe that all the horrible legacy code out there is more than enough proof of that. Great developers even go beyond simple and short solutions; they strive to solve problems without writing any code at all. The best line of code is the one you don’t write. Well-crafted code is simple, small, testable, easy to understand, and most important, does the job. Code is the main source of bugs and pain. The less we write it, the better

**Four Rules of Simple Design**

Before thinking about architecture, design patterns, generic solutions, or anything else, as a rule, a software craftsman will always try to write code that satisfies the “Four Rules of Simple Design,” as defined by Kent Beck:

1. Pass all tests
2. Clear, expressive, and consistent
3. Duplicates no behavior or configuration
4. Minimal methods, classes, and modules

Over the years, many people reworded these four rules (or elements). I personally prefer J. B. Rainsberger’s version:

1. Passes all tests
2. Minimizes duplication
3. Maximizes clarity
4. Has fewer elements

**A Career As a Software Craftsman**

Being a craftsman is more than being a good developer who writes code well and delivers business value. It's a lifestyle. It's a life where we choose to do things well, to be the best we can be. It's a life where we are prepared to make some sacrifices to learn and help others to learn the craft. It's a life of continuous dedication to the art of writing code. It's a constant search for better and more efficient ways to deliver value through software.

Being a craftsman means to be curious and experiment with new things. It means not to be dogmatic about tools, languages, or frameworks. It means to be pragmatic, always looking for simple solutions and using the best tools for the job. Although not dogmatic about them, a craftsman must master a good set of tools, languages, and frameworks.

True software craftsmen focus first on solving problems, not on writing code. However, when they do need to write code, they focus on writing quality code: code that is testable, easy to understand, and easy to maintain.

Climbing up the software development ladder does not mean becoming a manager or an architect. This is not a career progression; it is a career change. The skills needed to become a great manager or architect are not necessarily the same ones needed to become a great developer (and vice versa). Developers who, for one reason or another, decide to take roles as managers or architects are not climbing up the software development ladder; they are switching ladders.

Besides the things we are paid for, we should also invest all our dedication, passion, commitment, and knowledge we acquire outside working hours to make our workplace a better place: a place where everyone can learn and thrive. Investing in making our working environment better means creating more opportunities for enriching our own careers.

I never focused on doing just what was specified in the job listing. I never said, "That's not my job." In fact, I don't think I ever looked back at any job description or contract after being hired. I always tried to offer more, to do more, and to make sure everyone around me would become better. I always tried to help as much as I could, regardless of what my role or position was. This is what I consider my investment. It was an investment not only in my job, but also in my
individual career. But, as we would expect from any kind of investment, I wanted a return. At different moments of my personal or professional life, and at different jobs, what I wanted as a return on my investment varied. Exposure to certain technologies or industries; experience with different types of projects; opportunities to develop different skills, play different roles, and have different types of responsibilities; or even having more money were all things that at some point in my career I wanted as a return. Money was never a priority though: good software professionals will always have money enough to have a decent life. During my time in each job, I did my best to provide as much value as I could. I _wore the company's t-shirt_, as we say back home, and I got my return back.