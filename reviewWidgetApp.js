var reviewWidgetApp = angular.module('reviewWidgetApp', ['ngMaterial']);

var commentPanel = function(){
  return {
    scope: {
      reviewcomment: '@'
    },
    templateUrl: 'commentPanelTmpl.html'
  }
}

var reviewBtn = function(){
  return {
    scope: {
      reviewcomment: '='
    },
    template: '<div class="col-xs-12 col-sm-2">'
                +'<button type="button" class="btn btn-info" ng-click="showPrompt()">'
                  +'<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Review'
                +'</button>'
              +'</div>',
    controller: function($scope, $mdDialog){
      $scope.showPrompt = function(){
        var confirm = $mdDialog.prompt()
        .title('Review')
        .placeholder('Comment')
        .targetEvent(null)
        .ok('Ok')
        .cancel('Cancel');

        $mdDialog.show(confirm).then(function(result){
          $scope.reviewcomment = result;
        });
      }
    }
  }
}

reviewWidgetApp.directive('commentPanel', commentPanel);
reviewWidgetApp.directive('reviewBtn', reviewBtn);
