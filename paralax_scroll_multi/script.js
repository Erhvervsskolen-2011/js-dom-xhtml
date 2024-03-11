// window.onload = function() {

//     console.log('onload')

    window.addEventListener('scroll', () => {
        console.log('scroll');
        console.log(window.pageYOffset)
        console.log(window.scrollY)
        let parent = document.getElementById('paralax_container');
        let children = parent.getElementsByTagName('div');
        for ( let i = 0; i < children.length; i++) {
            // children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.lenght) + 'px)';
            
            children[i].style.transform = 
                'translateY(-' + (window.scrollY * i / children.length) + 'px)';

            console.log( children[i].style.transform )
        }
    }, false)

// } 

console.log('hej');