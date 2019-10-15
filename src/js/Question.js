export default class Question {
    constructor(q,a1,a2,a3,a4) {
        this.num = Question.getNumber();
        this.q = q;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.dom = null;
        Question.list.push(this)
    }
    onChange() {
        Question.onChange();
    }
    getCurrentAnswer() {
        const options = Array.from(this.dom.querySelectorAll('input'))
        const selected = options.find(op => op.checked)
        if(selected) {
            switch(selected.value) {
                case this.a1: return 0;
                case this.a2: return 1;
                case this.a3: return 2;
                case this.a4: return 3;
            }
        }
        return null
    }
    render(dom) {
        const ques = document.createElement('h3');
        ques.innerText = this.q;
        const rad = document.createElement('div');
        const c1 = document.createElement('input');
        c1.type = 'radio'
        c1.name = 'choice' + this.num
        c1.value = this.a1
        c1.onchange = () => {this.onChange()}
        rad.appendChild(c1)
        rad.appendChild(document.createTextNode(this.a1))
        const c2 = document.createElement('input');
        c2.type = 'radio'
        c2.name = 'choice' + this.num
        c2.value = this.a2
        c2.onchange = () => {this.onChange()}
        rad.appendChild(c2)
        rad.appendChild(document.createTextNode(this.a2))
        const c3 = document.createElement('input');
        c3.type = 'radio'
        c3.name = 'choice' + this.num
        c3.value = this.a3
        c3.onchange = () => {this.onChange()}
        rad.appendChild(c3)
        rad.appendChild(document.createTextNode(this.a3))
        const c4 = document.createElement('input');
        c4.type = 'radio'
        c4.name = 'choice' + this.num
        c4.value = this.a4
        c4.onchange = () => {this.onChange()}
        rad.appendChild(c4)
        rad.appendChild(document.createTextNode(this.a4))
        this.dom = document.createElement('div')
        this.dom.appendChild(ques);
        this.dom.appendChild(rad)
        dom.appendChild(this.dom)
    }
    static getNumber() {
        return Question.list.length
    }
    static getState() {
        return Question.list.map(q => q.getCurrentAnswer())
    }
    static add(q,a1,a2,a3,a4) {
        return new Question(q,a1,a2,a3,a4);
    }
    static renderAll(dom) {
        Question.list.map(q => q.render(dom))
    }
}
Question.onChange = () => {}
Question.list = [];