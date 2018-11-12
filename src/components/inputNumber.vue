<template>
  <div style="display: inline-block;">
    <div class="input-number">
      <span class="input-number-minus" id="minus" @click="getNumberMinue"></span>
      <span class="input-number-add" id="add" @click="getNumberAdd"></span>
      <div class="input-number-input">
        <input type="text" min="1" max="99" class="input-inner" id="input-text" aria-valuenow="1"
               @keyup="getNumberKeyUp">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "inputNumber",
    data: {
      number: '1',
      number2: 'a'
    },
    methods: {
      nowNumber() {
        let minusBtn = document.querySelector('#minus');
        let addBtn = document.querySelector('#add');
        let inputText = document.querySelector('#input-text');
        inputText.value = 1;
        minusBtn.style.cursor = 'not-allowed';
        minusBtn.onclick = function minus() {
          if (inputText.value < 3) {
            minusBtn.style.cursor = 'not-allowed';
            inputText.value = 1;
            this.number = inputText.value;
          }
          else {
            addBtn.style.cursor = 'auto';
            inputText.value--;
            this.number = inputText.value;
          }
        };

        addBtn.onclick = function add() {
          if (inputText.value > 97) {
            addBtn.style.cursor = 'not-allowed';
            inputText.value = 99;
            this.number = inputText.value;
          }
          else {
            minusBtn.style.cursor = 'auto';
            inputText.value++;
            this.number = inputText.value;
          }
        };
        inputText.onkeyup = function () {
          var reg = /^[0-9]*$/;
          if (reg.test(inputText.value) && parseInt(inputText.value) < 100) {
            return;
          }
          else {
            setTimeout(function () {
              inputText.value = 1;
              this.number = inputText.value;
            }, 500);
          }


        }

      },
      getNumberMinue() {
        if (parseInt(document.querySelector('#input-text').value) === 1) {
          this.$emit('getnumberminue', 1);
        }
        else {
          this.$emit('getnumberminue', parseInt(document.querySelector('#input-text').value) - 1);
        }
      },
      getNumberAdd() {
        if (parseInt(document.querySelector('#input-text').value) === 99) {
          this.$emit('getnumberadd', 99);
        }
        else {
          this.$emit('getnumberadd', parseInt(document.querySelector('#input-text').value) + 1);
        }
      },
      getNumberKeyUp() {
        if (parseInt(document.querySelector('#input-text').value) > 100) {
          this.$emit('getnumberkeyup', 1);
        }
        else {
          this.$emit('getnumberkeyup', parseInt(document.querySelector('#input-text').value));
        }

      }
    },
    mounted() {
      this.nowNumber();
    }
  }
</script>

<style scoped>
  .input-number {
    width: 140px;
    height: 40px;
    border: 1px solid rgba(179, 179, 179, 1);
    position: relative;
    display: inline-block;
  }

  .input-number span {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    background: rgba(238, 238, 238, 1);
    color: #808080;
    font-size: 18px;
  }

  .input-number span:nth-child(1) {
    left: 0;
    background-image: url("../assets/images/首页_slices/less.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .input-number span:nth-child(2) {
    right: 0;
    background-image: url("../assets/images/首页_slices/add.png");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .input-inner {
    width: 60px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 40px;
    padding: 0;
    margin: 0;
    border: none;
    text-align: center;
    border-left: 1px solid rgba(179, 179, 179, 1);
    border-right: 1px solid rgba(179, 179, 179, 1);
  }

  .input-number-add:before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .1);
  }

  .input-number-add:hover:before {
    content: '';
  }

  .input-number-add:active:before {
    background: transparent;
    content: '';
  }

  .input-number-minus:before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .1);
  }

  .input-number-minus:hover:before {
    content: '';
  }

  .input-number-minus:active:before {
    background: transparent;
    content: '';
  }
</style>
