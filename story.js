(async () => {
    hello = await ask(
        'Hello, I am your master. I heard you want to start your training right?',
        ['yes', 'no'],
    );

    if (hello == 'yes') {
        print();
        ays = await ask(
            'You know that if you complete your training you have to finish your missions, and I mean have to! Unless you to die. So I ask again do you want to?',
            ['yes', 'no'],
        );

        if (ays == 'yes') {
            print();
            role = await ask(
                'First thing first, what would you like to be?',
                ['fighter', 'defender', 'magician'],
            );

            if (role == 'defender') {
                print();
                print('It is a boring job. You defend the base until you get killed');
                print('(end)');
            }

            if (role == 'fighter') {
                print();
                weapon = await ask('What weapon would you like?',
                    ['bow', 'sword'],
                );

                if (weapon == 'sword') {
                    print();
                    print('Go practice with the dummies.');
                    print();
                    print('You get the the practice course.');
                    print(
                        'You have praciticed for a week, you are ready for your quest.',
                    );
                    print();
                    print(
                        'You embark on your quest with only instructions and 3 coins.',
                    );
                    print();
                    where = await ask(
                        'Where would you like to go?',
                        ['hotel', 'camp', 'shop'],
                    );

                    if (where == 'camp') {
                        print();
                        print(
                            'You go camping. You become scared, you have no materials.',
                        );
                        print('A bear finds you as an easy meal.');
                        print('(end)');
                    }

                    if (where == 'shop') {
                        print();
                        print('You are in the shop.');
                        camping_gear = await ask(
                            'do you want camping gear?', 
                            ['yes', 'no'],
                        );

                        if (camping_gear == 'no') {
                            print();
                            print(
                                'You did not buy from my shop!!! You will perish.',
                            );
                            print('(end)');

                            if (camping_gear == 'yes') {
                                print();
                                print('The camping gear is one coin.');
                                again_place = await ask(
                                    'Now where do you want to go?',
                                    ['camping', 'hotel'],
                                );

                                if (again_place == 'camping') {
                                    print();
                                    print(
                                        'A bear comes to your camp, but you are able to defend yourself.',
                                    );
                                    scroll = await ask(
                                        'Do you want to read the instructions?',
                                        ['yes', 'no'],
                                    );

                                    if (scroll == 'no') {
                                        print();
                                        print(
                                            'You throw the instructions aside. A fox comes and tears them up, you are lost forever.',
                                        );
                                        print('(end)');
                                    }

                                    if (scroll == 'yes') {
                                        print();
                                        print();
                                        print('Quest Instructions:');
                                        print();
                                        print(
                                            'You must retrieve the gold from the safe in Megalotroplolis, the city owes us a big debt.',
                                        );
                                        print(
                                            'If you fail you will be executed.',
                                        );
                                        print();
                                        follow = await ask(
                                            'Do you want to stay for the next night?', 
                                            ['yes', 'no'],
                                        );

                                        if (follow == 'yes') {
                                            print();
                                            print(
                                                'You are caught in a big storm. You are hit in the head with hail, it bleeds so fast you dont have time to think before you faint.',
                                            );
                                            print(
                                                'When you wake up you do not know who you are.',
                                            );
                                            print('(end)');
                                        }

                                        if (follow == 'no') {
                                            print();
                                            print(
                                                'You are in Megalotropolis you set up camp.',
                                            );
                                            coin = await ask(
                                                'You find 2 coins on the ground, one is facing heads and one is facing tails, which one do you want to pick up?',
                                                ['heads', 'tails'],
                                            );

                                            if (coin == 'heads') {
                                                print();
                                                print(
                                                    'You pick up the coin with heads, it is cursed a monster comes out and murders you.',
                                                );
                                                print('(end)');
                                            }

                                            if (coin == 'tails') {
                                                print();
                                                traveler = await ask(
                                                    'There is a wandering traveler, he wants to stay with you. DO you allow him?',
                                                    ['yes', 'no'],
                                                );

                                                if (traveler == 'no') {
                                                    print();
                                                    print(
                                                        'The traveler gets mad at you. While you are sleeping commites arson on your tent.',
                                                    );
                                                    print('(end)');
                                                }

                                                if (traveler == 'yes') {
                                                    print();
                                                    print(
                                                        'He thanks you for your generosity.',
                                                    );
                                                    print();
                                                    print('(It is now night.)');
                                                    print();
                                                    satchel = await ask(
                                                        'The man is now asleep do you want to search the satchel?' 
                                                        ['yes','no'],
                                                    );

                                                    if (satchel == 'yes') {
                                                        print();
                                                        print(
                                                            'The man is not actually asleep he reaches over and kills you.',
                                                        );
                                                        print('(end)');
                                                    }

                                                    if (satchel == 'no') {
                                                        print();
                                                        print(
                                                            'The man is evil and kills you in your sleep.',
                                                        );
                                                        print('(end)');
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }

                                if (again_place == 'hotel') {
                                    print();
                                    print(
                                        'You are in the hotel. There is a shooting, you save someones life by jumping in front of the bullet.',
                                    );
                                    print('(end)');
                                }
                            }
                        }
                    }

                    if (where == 'hotel') {
                        print();
                        print(
                            'You are in the hotel. There is a shooting, you save someones life by jumping in front of the bullet.',
                        );
                        print('(end)');
                    }
                }

                if (weapon == 'bow') {
                    print();
                    print('Now go to practice in the archery range!');
                    print('No more story here for now!');
                }
            }

            if (role == 'magician') {
                print();
                print('Ok, you get one week of traning.');
                print();
                win = await ask(
                    'The master calls you to his office do you go?',
                    ['yes', 'no'],
                );

                if (win == 'yes') {
                    print();
                    print('You go to the office. The master tells you, "you must die, if ot you will become to powerful!!!"');
                    print('You teleport away.');
                    print();
                    print('(2 years later)');
                    print();
                    print('You teleport back to the castle and kill the master.');
                    print(
                        'You request to not be the new master, but to live your life in peace.',
                    );
                    print();
                    print('CONGRATS!!!');
                    print('you win');
                    print('(end)');
                }
                    
                if (win == 'no') {
                    print();
                    print('More story to come here!);
                }
            }
        }

        if (ays == 'no') {
            print();
            print('Then get out of here!');
            print('(end)');
        }
    }

    if (hello == 'no') {
        print();
        print('Alright, now be on your way.');
        print('(end)');
    }
})();
