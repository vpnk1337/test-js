var terminalTyped = new Typed("#terminalType", {
  strings: [
    '^1000cd site protection<br>`<span class="terminal-user">root@connectionfilter.xyz: /site-protection$</span>`^1000 go build firewall.go^1000<br>^1000success<br>`<span class="terminal-user">root@connectionfilter.xyz: /site-protection$</span>`^1000screen -dmS firewall ./firewall<br>`root@connectionfilter.xyz:~$`^1000 clear'
  ],
  typeSpeed: 40,
  backspeed: 0,
  backDelay: 3000,
  loop: false,
  onComplete: function(self) {
    setTimeout(function() {
      self.reset();
    }, 1000);
  }
});
