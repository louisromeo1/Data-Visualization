// 
// test-cases.js
// Dataset for CSC444 Assignment 08, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// These are two very simply trees, the first (test_1) being a single
// node with three children and the second (test_2) being a tree with
// two branches, the first with 3 children and the second with 2. 
//

var test_1 = {
    "name": "root",
    "children": [
        {
            "name": "child1",
            "size": 10
        },
        {
            "name": "child2",
            "size": 20
        },
        {
            "name": "child3",
            "size": 30
        },
    ]
};

var test_2 = {
    "name": "root",
    "children": [
        {
            "name": "branch1",
            "children": [
                {
                    "name": "child1",
                    "size": 10
                },
                {
                    "name": "child2",
                    "size": 20
                },
                {
                    "name": "child3",
                    "size": 30
                },
            ]
        },
        {
            "name": "branch2",
            "children": [
                {
                    "name": "child1",
                    "size": 25
                },
                {
                    "name": "child2",
                    "size": 25
                },
            ]
        }
    ]
};

