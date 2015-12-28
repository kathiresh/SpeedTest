function showSpeed() {
    chrome.tabs.getSelected(null, function(tab) {
     //   var action_url = "http://www.google.com"
      //chrome.tabs.create({ url: "https://github.com/logout" });

      var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg";
      var downloadSize = 4995374; //bytes

      var oProgress = document.getElementById("progress");

      window.setTimeout(measureConnectionSpeed, 1);


      function measureConnectionSpeed() {
          var oProgress = document.getElementById("progress");
          oProgress.innerHTML = "Speed Test  <br />";
          var startTime, endTime;
          var download = new Image();
          download.onload = function () {
              endTime = (new Date()).getTime();
              showResults();
          }

          download.onerror = function (err, msg) {
            document.getElementById('gif-loading').style.display = "none";
            oProgress.innerHTML = "Please check your network connection...";
          }

          startTime = (new Date()).getTime();
          var cacheBuster = "?nnn=" + startTime;
          download.src = imageAddr + cacheBuster;

          function showResults() {
              var duration = (endTime - startTime) / 1000;
              var bitsLoaded = downloadSize * 8;
              var speedBps = (bitsLoaded / duration).toFixed(2);
              var speedKbps = (speedBps / 1024).toFixed(2);
              var speedMbps = (speedKbps / 1024).toFixed(2);
              document.getElementById('gif-loading').style.display = "none";
              document.getElementById('speed-list').style.display = "block";
              document.getElementById("bytesText").innerHTML = speedBps;
              document.getElementById("kbpsText").innerHTML = speedKbps;
              document.getElementById("mbpsText").innerHTML = speedMbps;
              }
            }
      });
};

window.onload = showSpeed();
