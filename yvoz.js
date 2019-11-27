
            var speakBtn = document.querySelector('#speakBtn');
            // testa se o navegador suporta o reconhecimento de voz
            if (window.SpeechRecognition || window.webkitSpeechRecognition) {
                // captura a voz
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
                recognition.lang = 'pt-BR';
                recognition.continuous = false;
                console.log(recognition);
                // inicia reconhecimento
                    console.log('Audio capturing started');
                    recognition.start();
                    
                // resultado do reconhecimento
                recognition.addEventListener('result', function(e) {
                    //console.log(e);
                    
                    let i = e.results.length - 1;
                    let result = e.results[i][0].transcript;
                    //console.log(result);
					
                    
                    //setInterval(function(){
                    if (result.toLowerCase() === 'próximo vídeo') {
                        //document.body.classList.toggle('luz-apagada');
                        //window.location.href = 'https://www.youtube.com/';
                        //window.open('https://www.youtube.com/', '_blank');
                        document.querySelector('.ytp-next-button').click();
                        
                    }

                    else if(result.toLowerCase() === 'play'){
                        document.querySelector('.ytp-play-button').click();
                        
                    }

                    else if(result.toLowerCase() === 'pause'){
                        document.querySelector('.ytp-play-button').click();
                        
                    }

                    else if(result.toLowerCase() === 'pula'){
                        document.querySelector('.ytp-ad-skip-button').click();
                        
                       
                    }

                    else if(result.toLowerCase() === 'vídeo anterior'){
                        window.history.back();
                        
                    }
					
					else if(result.toLowerCase() === 'reiniciar'){
                        document.querySelector('.ytp-prev-button').click();
                        
                    }
					
					else if(result.toLowerCase() === 'loop'){
                        let vd = document.getElementsByTagName('video')[0];
						let at = document.createAttribute('loop');
						vd.setAttributeNode(at);
                        
                    }
					
                //},500);

                    // window.location.href = 'http://' + result;
                }, false);
				
				recognition.addEventListener('end', function(e) {
                    recognition.start();
                }, false);
            } else {
                alert('Este navegador não suporta esta funcionalidade ainda!');
            }
