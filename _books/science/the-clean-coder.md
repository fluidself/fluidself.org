---
author: ugh
comments: false
date: 2018-12-01 19:13:09+00:00
layout: book.hbs
link: https://fluidself.org/books/science/the-clean-coder/
slug: the-clean-coder
title: 'The Clean Coder: A Code of Conduct for Professional Programmers - by Robert C. Martin'
---

**1. Professionalism**

Professionalism is all about taking responsibility.

We harm the function of our software when we create bugs. Therefore, in order to be professional, we must not create bugs. It is the lot of a professional to be accountable for errors even though errors are virtually certain. So, my aspiring professional, the first thing you must practice is apologizing. Apologies are necessary, but insufficient. You cannot simply keep making the same errors over and over. As you mature in your profession, your error rate should rapidly decrease towards the asymptote of zero. It won’t ever get to zero, but it is your responsibility to get as close as possible to it.

You must know it works. How can you know your code works? That’s easy. Test it. Test it again. Am I suggesting 100% test coverage? No, I’m not suggesting it. I’m demanding it. Every single line of code that you write should be tested. Period.

In short: You must be able to make changes without exorbitant costs. I call it “the Boy Scout rule”: Always check in a module cleaner than when you checked it out. Always make some random act of kindness to the code whenever you see it. It all comes back to the tests. If you have an automated suite of tests that covers virtually 100% of the code, and if that suite of tests can be executed quickly on a whim, then you simply will not be afraid to change the code. How do you prove you are not afraid to change the code? You change it all the time.

Your career is your responsibility. It is not your employer’s responsibility to make sure you are marketable. It is not your employer’s responsibility to train you, or to send you to conferences, or to buy you books. These things are your responsibility. Woe to the software developer who entrusts his career to his employer.

**Know Your Field**

A wealth of ideas, disciplines, techniques, tools, and terminologies decorate the last fifty years of our field. How much of this do you know? If you want to be a professional, you should know a sizable chunk of it and constantly be increasing the size of that chunk. Here is a minimal list of the things that every software professional should be conversant with:

- Design patterns. You ought to be able to describe all 24 patterns in the GOF book and have a working knowledge of many of the patterns in the POSA books.
- Design principles. You should know the SOLID principles and have a good understanding of the component principles.
- Methods. You should understand XP, Scrum, Lean, Kanban, Waterfall, Structured Analysis, and Structured Design.
- Disciplines. You should practice TDD, Object-Oriented design, Structured Programming, Continuous Integration, and Pair Programming.
- Artifacts: You should know how to use: UML, DFDs, Structure Charts, Petri Nets, State Transition Diagrams and Tables, flow charts, and decision tables.

**Practice:** Professionals practice. True professionals work hard to keep their skills sharp and ready. It is not enough to simply do your daily job and call that practice. Doing your daily job is performance, not practice. Practice is when you specifically exercise your skills outside of the performance of your job for the sole purpose of refining and enhancing those skills.

I’ll do a kata or two every day, often as part of settling in to work. Think of the kata as a 10-minute warm-up exercise in the morning and a 10-minute cool-down in the evening.

**Know Your Domain:** When starting a project in a new domain, read a book or two on the topic. Interview your customer and users about the foundation and basics of the domain. Spend some time with the experts, and try to understand their principles and values.

**2. Saying No**

Professionals speak truth to power. Professionals have the courage to say no to their managers.

Providing too much detail can be an invitation for micro-management.

**Trying:** The promise to try is an admission that you’ve been holding back, that you have a reservoir of extra effort that you can apply. The promise to try is an admission that the goal is attainable through the application of this extra effort; moreover, it is a commitment to apply that extra effort to achieve the goal. Therefore, by promising to try you are committing to succeed. This puts the burden on you. If your “trying” does not lead to the desired outcome, you will have failed. Do you have an extra reservoir of energy that you’ve been holding back? If you apply these reserves, will you be able to meet the goal? Or, by promising to try are you simply setting yourself up for failure?

If you are not holding back some energy in reserve, if you don’t have a new plan, if you aren’t going to change your behavior, and if you are reasonably confident in your original estimate, then promising to try is fundamentally dishonest. You are lying. And you are probably doing it to save face and to avoid a confrontation.

**3. Saying Yes**

There are three parts to making a commitment. You say you’ll do it. You mean it. You actually do it.

There are very few people who, when they say something, they mean it and then actually get it done. There are some who will say things and mean them, but they never get it done. And there are far more people who promise things and don’t even mean to do them. Ever heard someone say, “Man, I really need to lose some weight,” and you knew they are not going to do anything about it? It happens all the time.

Here are some examples of words and phrases to look for that are telltale signs of noncommitment:

- Need\should. “We need to get this done.” “I need to lose weight.” “Someone should make that happen.”
- Hope\wish. “I hope to get this done by tomorrow.” “I hope we can meet again some day.” “I wish I had time for that.” “I wish this computer was faster.”
- Let’s. “Let’s meet sometime.” “Let’s finish this thing.”

The secret ingredient to recognizing real commitment is to look for sentences that sound like this: I will... by... (example: I will finish this by Tuesday.) What’s important about this sentence? You’re stating a fact about something YOU will do with a clear end time. You’re not talking about anyone else but yourself. You’re talking about an action that you will take. You won’t “possibly” take it, or “might get to it”; you will achieve it. There is (technically) no way out of this verbal commitment. You said you’ll do it and now only a binary result is possible—you either get it done, or you don’t. If you don’t get it done, people can hold you up to your promises. You will feel bad about not doing it. You will feel awkward telling someone about not having done it (if that someone heard you promise you will). Scary, isn’t it?

**4. Coding**

Don’t write code when you are tired. Dedication and professionalism are more about discipline than hours. Make sure that your sleep, health, and lifestyle are tuned so that you can put in eight good hours per day.

When I am worried about an argument with my wife, or a customer crisis, or a sick child, I can’t maintain focus. My concentration wavers. I find myself with my eyes on the screen and my fingers on the keyboard, doing nothing. Catatonic. Rather than forcing myself to code while the background worry is nagging at me, I will spend a dedicated block of time, perhaps an hour, working on the issue that is creating the worry. If my child is sick, I will call home and check in. If I’ve had an argument with my wife, I’ll call her and talk through the issues. If I have money problems, I’ll spend time thinking about how I can deal with the financial issues. I know I’m not likely to solve the problems in this hour, but it is very likely that I can reduce the anxiety and quiet the background process.

**Creative Input:** I read a lot, and I read all kinds of material. I read material on software, politics, biology, astronomy, physics, chemistry, mathematics, and much more. However, I find that the thing that best primes the pump of creative output is science fiction. For you, it might be something else. Perhaps a good mystery novel, or poetry, or even a romance novel. I think the real issue is that creativity breeds creativity. There’s also an element of escapism. The hours I spend away from my usual problems, while being actively stimulated by challenging and creative ideas, results in an almost irresistible pressure to create something myself.

**Know When to Walk Away:** When you are stuck, when you are tired, disengage for awhile. Give your creative subconscious a crack at the problem. You will get more done in less time and with less effort if you are careful to husband your resources. Pace yourself, and your team. Learn your patterns of creativity and brilliance, and take advantage of them rather than work against them.

**Being Helped:** When someone offers to help you, be gracious about it. Accept the help gratefully and give yourself to that help. Do not protect your turf.

Learn how to ask for help. When you are stuck, or befuddled, or just can’t wrap your mind around a problem, ask someone for help. This is a matter of professional ethics. It is unprofessional to remain stuck when help is easily accessible.

**5. Test Driven Development**

**The Three Laws of TDD**

- You are not allowed to write any production code until you have first written a failing unit test.
- You are not allowed to write more of a unit test than is sufficient to fail—and not compiling is failing.
- You are not allowed to write more production code that is sufficient to pass the currently failing unit test.

**The Litany of Benefits**

**Courage:** This is one of the most powerful benefits of TDD. When you have a suite of tests that you trust, then you lose all fear of making changes. When you see bad code, you simply clean it on the spot. The code becomes clay that you can safely sculpt into simple and pleasing structures.

**Documentation:** Each of the unit tests you write when you follow the three laws is an example, written in code, describing how the system should be used. If you follow the three laws, then there will be a unit test that describes how to create every object in the system, every way that those objects can be created. There will be a unit test that describes how to call every function in the system every way that those functions can meaningfully be called. For anything you need to know how to do, there will be a unit test that describes it in detail. The unit tests are documents. They describe the lowest-level design of the system. They are unambiguous, accurate, written in a language that the audience understands, and are so formal that they execute. They are the best kind of low-level documentation that can exist. What professional would not provide such documentation?

**Design:** When you follow the three laws and write your tests first, you are faced with a dilemma. Often you know exactly what code you want to write, but the three laws tell you to write a unit test that fails because that code doesn’t exist! This means you have to test the code that you are about to write. The problem with testing code is that you have to isolate that code. It is often difficult to test a function if that function calls other functions. To write that test you’ve got to figure out some way to decouple the function from all the others. In other words, the need to test first forces you to think about good design.

**6. Practicing**

A programming kata is a precise set of choreographed keystrokes and mouse movements that simulates the solving of some programming problem. You aren’t actually solving the problem because you already know the solution. Rather, you are practicing the movements and decisions involved in solving the problem. The asymptote of perfection is once again the goal. You repeat the exercise over and over again to train your brain and fingers how to move and react. As you practice you may discover subtle improvements and efficiencies either in your motions or in the solution itself. Practicing a suite of katas is a good way to learn hot keys and navigation idioms. It is also a good way to learn disciplines such as TDD and CI. But most importantly, it is a good way to drive common problem/solution pairs into your subconscious, so that you simply know how to solve them when facing them in real programming.

**7. Acceptance Testing**

We will define acceptance tests as tests written by a collaboration of the stakeholders and the programmers in order to define when a requirement is done.

Professional developers have a single definition of done: Done means done. Done means all code written, all tests pass, QA and the stakeholders have accepted. Done. But how can you get this level of done-ness and still make quick progress from iteration to iteration? You create a set of automated tests that, when they pass, meet all of the above criteria! When the acceptance tests for your feature pass, you are done.

Acceptance tests should always be automated. There is a place for manual testing elsewhere in the software lifecycle, but these kinds of tests should never be manual. The reason is simple: cost.

Acceptance tests are not unit tests. Unit tests are written by programmers for programmers. They are formal design documents that describe the lowest level structure and behavior of the code. The audience is programmers, not business. Acceptance tests are written by the business for the business (even when you, the developer, end up writing them). They are formal requirements documents that specify how the system should behave from the business’ point of view. The audience is the business and the programmers.

**9. Time Management**

Programming is an intellectual exercise that requires extended periods of concentration and focus. Focus is a scarce resource, rather like manna.1 After you have expended your focus-manna, you have to recharge by doing unfocused activities for an hour or more. I don’t know what this focus-manna is, but I have a feeling that it is a physical substance (or possibly its lack) that affects alterness and attention. Whatever it may be, you can feel when it’s there, and you can feel when it’s gone. Professional developers learn to manage their time to take advantage of their focus-manna. We write code when our focus-manna is high; and we do other, less productive things when it’s not. Focus-manna is also a decaying resource. If you don’t use it when it’s there, you are likely to lose it. That’s one of the reasons that meetings can be so devastating. If you spend all your focus-manna in a meeting, you won’t have any left for coding. Worry and distractions also consume focus-manna. The fight you had with your spouse last night, the dent you put in your fender this morning, or the bill you forgot to pay last week will all suck the focus-manna out of you quickly.

**10. Estimation**

The problem is that we view estimates in different ways. Business likes to view estimates as commitments. Developers like to view estimates as guesses. The difference is profound.

Commitment is about certainty. Other people are going to accept your commitments and make plans based upon them. The cost of missing those commitments, to them, and to your reputation, is enormous. Missing a commitment is an act of dishonesty only slightly less onerous than an overt lie.

**11. Pressure**

You know what you believe by observing yourself in a crisis. If in a crisis you follow your disciplines, then you truly believe in those disciplines. On the other hand, if you change your behavior in a crisis, then you don’t truly believe in your normal behavior.

If you follow the discipline of Test Driven Development in noncrisis times but abandon it during a crisis, then you don’t really trust that TDD is helpful. If you keep your code clean during normal times but make messes in a crisis, then you don’t really believe that messes slow you down.

Choose disciplines that you feel comfortable following in a crisis. Then follow them all the time. Following these disciplines is the best way to avoid getting into a crisis. Don’t change your behavior when the crunch comes. If your disciplines are the best way to work, then they should be followed even in the depths of a crisis.
