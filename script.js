// generate the graph's bars using this data array
    
for (var i = 0; i <=18; i++ ) {
    var bar = document.createElement('div');            
    bar.setAttribute('class', 'bar');                 
    document.getElementById('frame').appendChild(bar);
    bar.style.left = '20px';
    bar.style.height = '400px';
    bar.style.backgroundColor = 'green';
    
    
    if (i == 2 ) {
        bar.style.left = '60px';
        bar.style.height = '200px';
        bar.style.backgroundColor = 'yellow';
    }
    
    if (i == 3 ) {
        bar.style.left = '100px';
        bar.style.height = '40px';
        bar.style.backgroundColor = 'orange';
    }
    
    if (i == 4 ) {
        bar.style.left = '140px';
        bar.style.height = '300px';
        bar.style.backgroundColor = 'purple';
    }
    
    if (i == 5 ) {
        bar.style.left = '180px';
        bar.style.height = '208px';
        bar.style.backgroundColor = 'brown';
    }
    
    if (i == 6 ) {
        bar.style.left = '220px';
        bar.style.height = '64px';
        bar.style.backgroundColor = 'lime';
    }
    
    if (i == 7 ) {
        bar.style.left = '260px';
        bar.style.height = '284px';
        bar.style.backgroundColor = 'coral';
    }
    
    if (i == 8 ) {
        bar.style.left = '300px';
        bar.style.height = '340px';
        bar.style.backgroundColor = 'cyan';
    }
    
    if (i == 9 ) {
        bar.style.left = '340px';
        bar.style.height = '88px';
        bar.style.backgroundColor = 'linen';
    }
    
    if (i == 10 ) {
        bar.style.left = '380px';
        bar.style.height = '220px';
        bar.style.backgroundColor = 'maroon';
    }
    
    if (i ==11 ) {
        bar.style.left = '420px';
        bar.style.height = '364px';
        bar.style.backgroundColor = 'navy';
    }
    
    if (i == 12 ) {
        bar.style.left = '460px';
        bar.style.height = '164px';
        bar.style.backgroundColor = 'olive';
    }
    
    if (i ==13) {
        bar.style.left = '500px';
        bar.style.height = '136px';
        bar.style.backgroundColor = 'peru';
    }
    
    if (i == 14 ) {
        bar.style.left = '540px';
        bar.style.height = '129px';
        bar.style.backgroundColor = 'pink';
    }
    
    if (i == 15 ) {
        bar.style.left = '580px';
        bar.style.height = '44px';
        bar.style.backgroundColor = 'silver';
    }
    
    if (i == 16 ) {
        bar.style.left = '620px';
        bar.style.height = '240px';
        bar.style.backgroundColor = 'tan';
    }
    
    if (i == 17 ) {
        bar.style.left = '660px';
        bar.style.height = '348px';
        bar.style.backgroundColor = 'salmon';
    }
    
    if (i == 18 ) {
        bar.style.left = '700px';
        bar.style.height = '48px';
        bar.style.backgroundColor = 'wheat';
    }
}
    
data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

