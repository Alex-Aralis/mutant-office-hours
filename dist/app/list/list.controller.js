(function(){
    'use strict'

    angular.module('mutantApp.list')
        .controller('listController', listControllerFunction);

    listControllerFunction.$inject = ['scheduler', 'texter', 'user'];
    function listControllerFunction(scheduler, texter, user){
        var vm = this;
        
        vm.inputMutant = new scheduler.Mutant();
        vm.mutants = scheduler.getMutantsOfUser(user);

        vm.addMutant = addMutant;
        vm.sendTextTo = sendTextTo;
        
        ////////////
   
        function addMutant(){
            scheduler.addMutantToUser(vm.inputMutant, user);
            vm.inputMutant = new scheduler.Mutant();
        }

        function sendTextTo(mutant){
            texter.send(new texter.Text({
                name: mutant.name,
                topic: mutant.topic,
                phone: mutant.phone,
            }))
            .then(function(ret){
                mutant.notified = true;
                scheduler.updateMutantInMutants(mutant,vm.mutants)
            })
            .catch(function(err){
                console.log('send text failed');
                console.log(err);
            });
        }
    }
})();
