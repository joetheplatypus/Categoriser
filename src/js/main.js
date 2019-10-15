import Question from './Question.js'
import Categories from './Categories.js';
const div = document.getElementById('questions');
const result = document.getElementById('result')
Question.add('question', 'answer1', 'ans2', 'ans3', 'a4')
Question.add('question', 'answer1', 'ans2', 'ans3', 'a4')
Question.add('question', 'answer1', 'ans2', 'ans3', 'a4')
Question.add('question', 'answer1', 'ans2', 'ans3', 'a4')
Question.add('question', 'answer1', 'ans2', 'ans3', 'a4')

Categories.create('one','two','three','four')
Categories.setGrid([
    [0,2,3,1],
    [0,2,3,1],
    [0,2,3,1],
    [0,2,3,1],
    [0,2,3,1],
])


Question.renderAll(div)

Question.onChange = () => {
    const s = Question.getState()
    countCategories(s);
    if(s.filter(a => a === null).length === 0) {
        showResult()
    }
}

function showResult() {
    result.innerHTML = `<h2>You are: ${Categories.getHighest()}</h2>`
}

function countCategories(state) {
    Categories.resetCounter()
    for(let i = 0; i < state.length; i++) {
        if(state[i] !== null) {
            Categories.countCategory(i,state[i])
        }
    }
}
