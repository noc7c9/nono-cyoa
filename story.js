(async () => {
    hello = await input(
        'Hello I am your master, you want to start your training right? (yes/no) ',
    );

    if (hello == 'yes') {
        print();
        ays = await input(
            'You know that if you complete your training you have to, and I mean have to unless you to die. So I ask again do you want to? (yes/no) ',
        );

        if (ays != 'yes' && ays != 'no') {
            redo_question();
            ays = await input(
                'You know that if you complete your training you have to, and I mean have to unless you to die. So I ask again do you want to? (yes/no) ',
            );
        }

        if (ays == 'yes') {
            print();
            role = await input(
                'First thing first, what would you like to be, (fighter/defender/magician) ',
            );

            if (role != 'fighter' && ays != 'defender' && ays != 'magician') {
                redo_question();
                ays = await input(
                    'You know that if you complete your training you have to, and I mean have to unless you to die. So I ask again do you want to? (yes/no) ',
                );
            }

            if (role == 'defender') {
                print();
                print(
                    'it is a boring job and you defend the base until you get killed',
                );
                print('(end)');
            }

            if (role == 'fighter') {
                print();
                weapon = await input('what weapon would you like (bow/sword)');

                if (weapon == 'sword') {
                    print();
                    print('go practice with the dummies');
                    print();
                    print('you get the the practice course');
                    print(
                        'you have praciticed for a week you are ready for your quest',
                    );
                    print();
                    print(
                        'you embark on your quest with only instructions and 3 coins',
                    );
                    print();
                    where = await input(
                        'where would you like to go (hotel 2 coins/camp 0 coins/shop ? coins)',
                    );

                    if (where == 'camp') {
                        print();
                        print(
                            'you go camping and you are scared because you have no materials',
                        );
                        print('a bear finds an easy meal by eating you');
                        print('(end)');
                    }

                    if (where == 'shop') {
                        print();
                        print('you are in the shop');
                        camping_gear = await input(
                            'do you want camping gear (yes/no)',
                        );

                        if (camping_gear == 'no') {
                            print();
                            print(
                                'you did not buy from my shop!!! you will perish',
                            );
                            print('(end)');

                            if (camping_gear == 'yes') {
                                print();
                                print('it is one coin');
                                again_place = await input(
                                    'now where do you want to go (camping 0 coins/hotel 2 coins)',
                                );

                                if (again_place == 'camping') {
                                    print();
                                    print(
                                        'a bear comes to your camp but you are able to defend yourself',
                                    );
                                    scroll = await input(
                                        'Do you want to read instructions (yes/no)',
                                    );

                                    if (scroll == 'no') {
                                        print();
                                        print(
                                            'you throw the instructions aside and a fox comes and tears it up you are lost forever',
                                        );
                                        print('(end)');
                                    }

                                    if (scroll == 'yes') {
                                        print();
                                        print();
                                        print('Quest Instructions');
                                        print();
                                        print(
                                            'You must retrieve the gold from the safe in megalotroplolis the city owes us a big debt',
                                        );
                                        print(
                                            'if you fail you will be executed',
                                        );
                                        print();
                                        follow = await input(
                                            'do you want to stay for the next night (yes/no)',
                                        );

                                        if (follow == 'yes') {
                                            print();
                                            print(
                                                'you are caught in a big storm and are hit in the head with hail and it bleeds so fast you dont have time to thik before you faint',
                                            );
                                            print(
                                                'when you wake up you do not know who you are',
                                            );
                                            print('(end)');
                                        }

                                        if (follow == 'no') {
                                            print();
                                            print(
                                                'you are in megalotropolis you set up camp',
                                            );
                                            coin = await input(
                                                'you find 2 coins on the ground one is heads and one is tails which one do you want to pick up (heads/tails)',
                                            );

                                            if (coin == 'heads') {
                                                print();
                                                print(
                                                    'you pick up the coin with heads it is cursed a monster comes out and murders you',
                                                );
                                                print('(end)');
                                            }

                                            if (coin == 'tails') {
                                                print();
                                                traveler = await input(
                                                    'there is a wandering traveler he wants to stay with you (yes/no)',
                                                );

                                                if (traveler == 'no') {
                                                    print();
                                                    print(
                                                        'the traveler gets mad at you and while you are sleeping commites arsen on your tent',
                                                    );
                                                    print('(end)');
                                                }

                                                if (traveler == 'yes') {
                                                    print();
                                                    print(
                                                        'He thanks you for your generosity',
                                                    );
                                                    print();
                                                    print('(it is now night)');
                                                    print();
                                                    satchel = await input(
                                                        'The man is now asleep do you want to search the satchel? (yes/no)',
                                                    );

                                                    if (satchel == 'yes') {
                                                        print();
                                                        print(
                                                            'The man is not actually asleep he reaches over and kills you',
                                                        );
                                                        print('(end)');
                                                    }

                                                    if (satchel == 'no') {
                                                        print();
                                                        print(
                                                            'the man is evil and kills you in your sleep',
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
                                        'you are in the hotel and there is a shooting you save someones life by jumping in front of the bullet',
                                    );
                                    print('(end)');
                                }
                            }
                        }
                    }

                    if (where == 'hotel') {
                        print();
                        print(
                            'you are in the hotel and there is a shooting you save someones life by jumping in front of the bullet',
                        );
                        print('(end)');
                    }
                }

                if (weapon == 'bow') {
                    print();
                    print('now go to practice in the archery range');
                }
            }

            if (role == 'magician') {
                print();
                print('ok you get one week of traning');
                print();
                win = input(
                    'the master calls you to his office do you go (yes/no)',
                );

                if (win == 'yes') {
                    print();
                    print(
                        "you go to the office and the master tells you 'you will die you will become to powerful!!!!",
                    );
                    print('you teleport away');
                    print();
                    print('2 years later');
                    print();
                    print('you teleport back to the place and kill the master');
                    print(
                        'you request to not be the new master but to live your life in peace',
                    );
                    print();
                    print('CONGRATS!!!');
                    print('you win');
                    print('(end)');
                }
            }
        }

        if (ays == 'no') {
            print();
            print('then get out of here!');
            print('(end)');
        }
    }

    if (hello == 'no') {
        print();
        print('alright now be on your way');
        print('(end)');
    }
})();