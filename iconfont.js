;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M543.579229 105.327884 243.082294 323.091536 99.740632 323.091536c-18.284435 0-33.106002 14.821567-33.106002 33.106002L66.63463 673.972998c0 18.284435 14.82259 33.106002 33.106002 33.106002l143.341662 0 300.497958 217.763652c21.88852 15.862269 52.532447 0.224104 52.532447-26.807552L596.1127 132.135436C596.111676 105.10378 565.467749 89.465614 543.579229 105.327884zM529.899672 197.011003 529.899672 833.158511 273.243221 647.165446c-0.135076-0.098237-0.279363-0.173962-0.415462-0.270153-0.533143-0.375553-1.084705-0.723477-1.64036-1.067308-0.382717-0.236384-0.76134-0.478907-1.149173-0.697895-0.542352-0.305969-1.102101-0.581238-1.662873-0.856507-0.426719-0.209778-0.850367-0.427742-1.282203-0.618077-0.524956-0.230244-1.064238-0.428765-1.602498-0.63138-0.487094-0.184195-0.971118-0.375553-1.463328-0.536212-0.494257-0.160659-1.000793-0.289596-1.505283-0.426719-0.553609-0.150426-1.105171-0.306992-1.663896-0.427742-0.462534-0.100284-0.933255-0.171915-1.402953-0.252757-0.61603-0.106424-1.228991-0.211824-1.848091-0.282433-0.443092-0.050142-0.893346-0.076748-1.341554-0.109494-0.651846-0.048095-1.301645-0.089028-1.953492-0.098237-0.166799-0.002047-0.327458-0.024559-0.49528-0.024559L132.846634 640.865973 132.846634 389.30354l120.970142 0c6.977925 0 13.776771-2.204202 19.426445-6.299473L529.899672 197.011003z"  ></path>' +
    '' +
    '<path d="M832.153624 505.214457l115.109668-115.109668c12.928451-12.928451 12.928451-33.889855 0-46.819328-12.928451-12.928451-33.890878-12.928451-46.819328 0L785.334295 458.395128 670.224628 343.28546c-12.928451-12.928451-33.890878-12.928451-46.819328 0-12.928451 12.928451-12.928451 33.890878 0 46.819328l115.109668 115.109668L623.405299 620.324124c-12.928451 12.928451-12.928451 33.889855 0 46.819328 12.928451 12.928451 33.890878 12.928451 46.819328 0l115.109668-115.109668 115.109668 115.109668c12.928451 12.928451 33.889855 12.928451 46.819328 0 12.928451-12.928451 12.928451-33.890878 0-46.819328L832.153624 505.214457z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-stop" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C228.266667 0 0 228.266667 0 512c0 283.733333 228.266667 512 512 512s512-228.266667 512-512C1024 228.266667 795.733333 0 512 0zM512 951.466667C268.8 951.466667 72.533333 755.2 72.533333 512 72.533333 268.8 268.8 72.533333 512 72.533333S951.466667 268.8 951.466667 512C951.466667 755.2 755.2 951.466667 512 951.466667zM437.333333 341.333333l-21.333333 0c-17.066667 0-32 14.933333-32 32l0 277.333333c0 17.066667 14.933333 32 32 32l21.333333 0c17.066667 0 32-14.933333 32-32l0-277.333333C469.333333 356.266667 454.4 341.333333 437.333333 341.333333zM608 341.333333l-21.333333 0c-17.066667 0-32 14.933333-32 32l0 277.333333c0 17.066667 14.933333 32 32 32l21.333333 0c17.066667 0 32-14.933333 32-32l0-277.333333C640 356.266667 625.066667 341.333333 608 341.333333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 62.389956c-248.312412 0-449.610044 201.297632-449.610044 449.610044s201.297632 449.610044 449.610044 449.610044 449.610044-201.297632 449.610044-449.610044S760.312412 62.389956 512 62.389956zM786.507004 786.507004c-35.672454 35.672454-77.196173 63.672158-123.416867 83.222423-47.821145 20.22667-98.655927 30.482245-151.09116 30.482245-52.435233 0-103.270015-10.255575-151.09116-30.482245-46.220694-19.549242-87.744413-47.549969-123.416867-83.222423-35.672454-35.672454-63.672158-77.196173-83.222423-123.416867-20.22667-47.821145-30.482245-98.655927-30.482245-151.090137 0-52.435233 10.255575-103.270015 30.482245-151.09116 19.549242-46.220694 47.549969-87.744413 83.222423-123.416867 35.672454-35.672454 77.196173-63.672158 123.416867-83.222423 47.821145-20.22667 98.654904-30.482245 151.09116-30.482245 52.435233 0 103.268992 10.255575 151.09116 30.482245 46.220694 19.549242 87.744413 47.549969 123.416867 83.222423 35.672454 35.672454 63.672158 77.196173 83.222423 123.416867 20.22667 47.821145 30.482245 98.655927 30.482245 151.09116 0 52.435233-10.255575 103.268992-30.482245 151.090137C850.179163 709.310831 822.179458 750.83455 786.507004 786.507004z"  ></path>' +
    '' +
    '<path d="M575.653739 507.980453 308.169685 305.667701c-3.094478-1.786693-6.961552 0.446162-6.961552 4.019547l0 404.625504c0 3.572362 3.868097 5.806239 6.961552 4.019547l267.484054-202.312752C578.747193 514.232854 578.747193 509.767146 575.653739 507.980453z"  ></path>' +
    '' +
    '<path d="M718.151174 306.049395l-92.229564 0c-2.563382 0-4.640694 2.365884-4.640694 5.28333l0 401.334551c0 2.917446 2.078335 5.28333 4.640694 5.28333l92.229564 0c2.563382 0 4.640694-2.365884 4.640694-5.28333L722.791867 311.332724C722.791867 308.415278 720.714556 306.049395 718.151174 306.049395z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 62.389956c-248.312412 0-449.610044 201.297632-449.610044 449.610044s201.297632 449.610044 449.610044 449.610044 449.610044-201.297632 449.610044-449.610044S760.312412 62.389956 512 62.389956zM786.507004 786.507004c-35.672454 35.672454-77.196173 63.672158-123.416867 83.222423-47.821145 20.22667-98.655927 30.482245-151.09116 30.482245-52.435233 0-103.270015-10.255575-151.09116-30.482245-46.220694-19.549242-87.744413-47.549969-123.416867-83.222423-35.672454-35.672454-63.672158-77.196173-83.222423-123.416867-20.22667-47.821145-30.482245-98.655927-30.482245-151.090137 0-52.435233 10.255575-103.270015 30.482245-151.09116 19.549242-46.220694 47.549969-87.744413 83.222423-123.416867 35.672454-35.672454 77.196173-63.672158 123.416867-83.222423 47.821145-20.22667 98.654904-30.482245 151.09116-30.482245 52.435233 0 103.268992 10.255575 151.09116 30.482245 46.220694 19.549242 87.744413 47.549969 123.416867 83.222423 35.672454 35.672454 63.672158 77.196173 83.222423 123.416867 20.22667 47.821145 30.482245 98.655927 30.482245 151.09116 0 52.435233-10.255575 103.268992-30.482245 151.090137C850.179163 709.310831 822.179458 750.83455 786.507004 786.507004z"  ></path>' +
    '' +
    '<path d="M715.830315 305.667701 448.346261 507.980453c-3.094478 1.786693-3.094478 6.252401 0 8.039093l267.484054 202.312752c3.094478 1.786693 6.961552-0.446162 6.961552-4.019547l0-404.625504C722.791867 306.113863 718.924793 303.881009 715.830315 305.667701z"  ></path>' +
    '' +
    '<path d="M398.078391 306.049395l-92.229564 0c-2.563382 0-4.640694 2.365884-4.640694 5.28333l0 401.334551c0 2.917446 2.078335 5.28333 4.640694 5.28333l92.229564 0c2.563382 0 4.641717-2.365884 4.641717-5.28333L402.720108 311.332724C402.719084 308.415278 400.641773 306.049395 398.078391 306.049395z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-start" viewBox="0 0 1027 1024">' +
    '' +
    '<path d="M512 74.901279c240.287754 0 435.789258 195.501504 435.789258 435.789258S752.287754 946.479795 512 946.479795 76.210742 750.978292 76.210742 510.690537 271.712246 74.901279 512 74.901279zM512 7.856777C234.302199 7.856777 9.16624 232.924645 9.16624 510.690537s225.135959 502.83376 502.83376 502.83376c277.765893 0 502.83376-225.067867 502.83376-502.83376S789.765893 7.856777 512 7.856777" fill="" ></path>' +
    '' +
    '<path d="M730.967079 477.503509l-268.178005-195.568286c-10.45868-7.50977-23.465575-7.844992-34.057821-1.005668-10.660338 6.904798-17.298005 20.045258-17.298005 34.192696v391.06979c0 14.21422 6.637668 27.287898 17.298005 34.192696 5.028338 3.285442 10.659028 4.961555 16.224246 4.961555 6.16757 0 12.33645-1.944552 17.766793-5.968532l268.178005-195.568287c9.788235-7.106455 15.755458-19.644563 15.755457-33.120245s-5.967223-26.012481-15.688675-33.185719z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M528.2 937.4c-6 0-11.9-2-16.8-5.9L226.3 700.7H89.7C75 700.7 63 688.7 63 674V338c0-14.7 11.9-26.6 26.6-26.6h137L512 93.3c8.1-6 18.9-7.2 28-2.7 9.1 4.5 14.8 13.7 14.8 23.9v796.3c0 10.3-5.9 19.6-15.2 24-3.6 1.8-7.5 2.6-11.4 2.6z m-411.9-290h119.4c6.1 0 12 2.1 16.8 5.9l249.1 201.6V168.4L251.9 359.2c-4.7 3.5-10.3 5.5-16.2 5.5H116.3v282.7z m603.8 70.1C774.8 662.8 805 590 805 512.7s-30.2-150.2-84.9-204.9c-10.4-10.4-27.3-10.4-37.7 0-10.4 10.4-10.4 27.3 0 37.7 44.6 44.6 69.3 104 69.3 167.2s-24.6 122.5-69.3 167.2c-10.4 10.4-10.4 27.3 0 37.7 5.2 5.2 12 7.8 18.8 7.8 6.9-0.1 13.7-2.7 18.9-7.9z m109.1 109.1c173.1-173.1 173.1-454.8 0-627.9-10.4-10.4-27.3-10.4-37.7 0-10.4 10.4-10.4 27.3 0 37.7 152.4 152.4 152.4 400.2 0 552.6-10.4 10.4-10.4 27.3 0 37.7 5.2 5.2 12 7.8 18.8 7.8s13.7-2.7 18.9-7.9z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)