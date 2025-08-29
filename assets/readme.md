


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


                                  Ans to the question no: 1


একটিমাত্র এলিমেন্টের জন্য ID ব্যবহার করলে getElementById(), একাধিক এলিমেন্টের লাইভ কালেকশনের জন্য ক্লাস ব্যবহার করলে getElementsByClassName(), আর CSS সিলেক্টরের নমনীয়তা চাইলে querySelector() ও querySelectorAll() ব্যবহার করা হয়।

                                      Ans to the question no: 2
                Create the element:
                const newDiv = document.createElement('div');

                  Modify element:
                newDiv.textContent = 'This is a new element.';
                    newDiv.className = 'my-new-class';
                   
                   insert into the dom:
                    const parentElement = document.getElementById('container');
                    parentElement.appendChild(newDiv);

                      Ans to the question no: 3

 ইভেন্ট বাবলিং (Event Bubbling) হলো জাভাস্ক্রিপ্টে একটি প্রক্রিয়া, যেখানে একটি নির্দিষ্ট HTML এলিমেন্টে কোনো ইভেন্ট (যেমন: ক্লিক) ঘটলে, সেই ইভেন্টটি শুধুমাত্র সেই এলিমেন্টেই সীমাবদ্ধ থাকে না, বরং এটি তার প্যারেন্ট (parent) এলিমেন্ট এবং তারপর তার প্যারেন্ট, এভাবে DOM ট্রির উপরের দিকে যেতে থাকে, যতক্ষণ না এটি document অবজেক্ট পর্যন্ত পৌঁছায়।
 Let,
 <button> একটি <div>-এর মধ্যে আছে এবং <div>টি একটি <body>-এর মধ্যে আছে। যদি আপনি বোতামটিতে ক্লিক করেন, তাহলে ইভেন্টটি প্রথমে বোতামে শুরু হবে, তারপর <div>-তে "বাবেল" করবে এবং সবশেষে <body>-তে বাবেল করবে। এর ফলে, বোতাম, div, এবং body—এই তিনটি এলিমেন্টেই যদি click ইভেন্টের জন্য হ্যান্ডলার যুক্ত থাকে, তবে তিনটিই কার্যকর হবে।

  আপনি চাইলে event.stopPropagation() পদ্ধতি ব্যবহার করে এই বাবলিং প্রক্রিয়াটি বন্ধ করে দিতে পারেন।

                                Ans to the question no: 4

                  
  ইভেন্ট ডেলিগেশন (Event Delegation) হলো এমন একটি কৌশল, যেখানে আপনি একাধিক চাইল্ড এলিমেন্টের ইভেন্ট হ্যান্ডল করার জন্য প্রতিটি এলিমেন্টে আলাদা করে ইভেন্ট লিসেনার না জুড়ে তাদের প্যারেন্ট এলিমেন্টে একটিমাত্র ইভেন্ট লিসেনার যুক্ত করেন।

এটি, মেমরি সাশ্রয়, কোড সরলীকরণ, ডায়নামিক এলিমেন্ট হ্যান্ডলিং করে.

  এটি একটি স্মার্ট পদ্ধতি যা ইভেন্ট বাবলিং (Event Bubbling) নীতি ব্যবহার করে, যেখানে একটি ইভেন্ট চাইল্ড থেকে প্যারেন্টে প্রবাহিত হয়। এই বাবলিং-এর সুযোগ নিয়ে আমরা প্যারেন্ট এলিমেন্টে লিসেনার যুক্ত করি এবং ইভেন্টটি কোন চাইল্ড এলিমেন্ট থেকে এসেছে তা খুঁজে বের করে সেই অনুযায়ী কাজ করি।
                       
                       Ans to the question no: 5
                       
                       
                       event.preventDefault(): 
                       
এই পদ্ধতিটি ইভেন্টের ডিফল্ট আচরণ (default behavior) বন্ধ করে দেয়। যেমন:

একটি লিংকে ক্লিক করলে ব্রাউজার সাধারণত অন্য পৃষ্ঠায় চলে যায়। preventDefault() ব্যবহার করলে এই ডিফল্ট নেভিগেশন বন্ধ হবে।

একটি ফর্ম সাবমিট করলে পেজ রিলোড হয়। preventDefault() ব্যবহার করলে রিলোড হওয়া বন্ধ হবে।



event.stopPropagation(): 
এই পদ্ধতিটি ইভেন্টের বাবলিং (bubbling) প্রক্রিয়া বন্ধ করে দেয়। এটি নিশ্চিত করে যে একটি ইভেন্ট শুধুমাত্র বর্তমান এলিমেন্টেই কাজ করবে এবং এর প্যারেন্ট এলিমেন্টগুলোতে ছড়িয়ে পড়বে না।


                              Thank You. Alhamdullillah for everything.