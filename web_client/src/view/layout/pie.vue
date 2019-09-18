<template>
  <div class="no-bg">
    <div class="panel">
      <div class="panel-heading">
        动画-饼图
      </div>
      <div class="panel-body">
        <div class="pie-item">
          <p>5%大小</p>
          <div class="pie-simple" style="--percent:5">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <p>10%大小</p>
          <div class="pie-simple" style="--percent: 10">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <p>40%大小</p>
          <div class="pie-simple" style="--percent:40">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <p>50%大小</p>
          <div class="pie-simple" style="--percent:50">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <p>60%大小</p>
          <div class="pie-simple" style="--percent:60">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <p>99%大小</p>
          <div class="pie-simple" style="--percent:99">
            <div class="pie-left"></div>
            <div class="pie-right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        动画效果（单循环-左，交替循环-右）
      </div>
      <div class="panel-body">
        <div class="pie-item">
          <div class="pie-spin-simple">
            <div class="pie-spin1 pie-spin1-left"></div>
            <div class="pie-spin1 pie-spin1-right"></div>
          </div>
        </div>
        <div class="pie-item">
          <div class="pie-spin-simple">
            <div class="pie-spin2 pie-spin2-left"></div>
            <div class="pie-spin2 pie-spin2-right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        动画-打点
      </div>
      <div class="panel-body">
        <div class="dot-box">
          正在加载中<i class="dot"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
</script>
<style lang="scss" scoped>
.pie-item {
  width: 150px;
  display: inline-block;

  p {
    text-align: center;
  }

  .pie-simple {
    width: 120px;
    height: 120px;
    background: #f8f8f8;
    border-radius: 50%;
    overflow: hidden;

    .pie-left,
    .pie-right {
      width: 50%;
      height: 100%;
      float: left;
      position: relative;
      overflow: hidden;
    }

    .pie-left::before,
    .pie-right::before,
    .pie-right::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: teal
    }

    .pie-right::before {
      background-color: red
    }

    .pie-right::after {
      background-color: #f0f;
    }

    .pie-left::before {
      left: 100%;
      transform-origin: left;
      transform: rotate(calc(3.6deg * (var(--percent) - 50)));
      opacity: calc(99999 * (var(--percent) - 50));
    }

    .pie-right::before {
      right: 100%;
      transform-origin: right;
      transform: rotate(calc(3.6deg * var(--percent)));
    }

    .pie-right::after {
      opacity: calc(99999 * (var(--percent) - 50));
    }

  }

  .pie-spin-simple {
    width: 120px;
    height: 120px;
    background: #f8f8f8;
    border-radius: 50%;
    overflow: hidden;

    .pie-spin1,
    .pie-spin2 {
      width: 50%;
      height: 100%;
      float: left;
      position: relative;
      overflow: hidden;
    }

    .pie-spin1::before,
    .pie-spin1::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: teal;
    }

    .pie-spin1-left::before {
      background-color: teal;
    }

    .pie-spin1-left::after {
      background-color: #ff0;
    }

    .pie-spin1-right::before {
      background-color: #f00;
    }

    .pie-spin1-right::after {
      background-color: #f0f;
    }

    .pie-spin1-left {
      opacity: 1;
      animation: second-half-show 1.6s steps(1, end) infinite;
    }

    .pie-spin1-left::before {
      left: 100%;
      transform-origin: left;
      animation: spin 1.6s .8s infinite linear;
    }

    .pie-spin1-right::before {
      right: 100%;
      transform-origin: right;
      animation: spin 1.6s infinite linear;
    }

    .pie-spin1-right::after {
      animation: second-half-show 1.6s steps(1, end) infinite;
      opacity: 1;
    }

    .pie-spin1-left::after {
      animation: second-half-hide 1.6s steps(1, end) infinite;
      opacity: 0;
    }

    .pie-spin2-left::before,
    .pie-spin2-right::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: teal;
    }

    .pie-spin2-left::before {
      background-color: teal;
    }

    .pie-spin2-right::before {
      background-color: #f00;
    }

    .pie-spin2-left::before {
      left: 100%;
      transform-origin: left;
      animation: spinWait2 3.2s infinite linear;
    }

    .pie-spin2-right::before {
      right: 100%;
      transform-origin: right;
      animation: spinWait1 3.2s infinite linear;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes second-half-hide {
  0% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}

@keyframes second-half-show {
  0% {
    opacity: 0;
  }

  50%,
  100% {
    opacity: 1;
  }
}

@keyframes spinWait1 {
  0% {
    transform: rotate(0deg);
  }

  25%,
  50% {
    transform: rotate(180deg);
  }

  75%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinWait2 {

  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.dot-box {
  font-size: 18px;

  .dot {
    display: inline-block;
    height: 1em;
    line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
  }

 .dot::before {
    display: block;
    content: '...\A..\A.';
    white-space: pre-wrap;
    /* 也可以是white-space: pre */
    // animation: dot 3s infinite step-start both;
  }

  @keyframes dot {
    33% {
      transform: translateY(-2em);
    }

    66% {
      transform: translateY(-1em);
    }
  }
}

</style>
