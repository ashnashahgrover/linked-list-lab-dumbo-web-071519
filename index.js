let firstNode = {name: 'Alexandra', next: 108}
let secondNode = {name: 'Kirstin', next: 917}
let thirdNode = {name: 'Juliet', next: 389}
let fourthNode = {name: 'Timmy', next: 317}
let fifthNode = {name: 'Jacob', next: null}

let collection = {0:firstNode, 108:secondNode,
  917:thirdNode, 389:fourthNode, 317:fifthNode}

function getName(node){
  return node["name"]
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  return collection[node["next"]]
}

function nodeAt(index, linkedList, collection){
  let head=collection[linkedList]
  let nodeToReturn=head
  for (let i=0; i<index; i++){
    nodeToReturn = next(nodeToReturn, collection)
  }
  return nodeToReturn
}

function addressAt(index, linkedList, collection){
  if (index==0){
    return linkedList
  } else {
  let nodeThatPointsToIndex=nodeAt(index-1, linkedList, collection)
  return nodeThatPointsToIndex["next"]
  }
}

function indexAt(targetNode, collection, linkedList){
  let currentNode=collection[linkedList]
  let i=0
  while (currentNode!=targetNode){
    i++
    currentNode=next(currentNode, collection)
  }
  return i
}

function insertNodeAt(index, address, linkedList, collection){
  let nodeBeforeNewNode = nodeAt(index-1, linkedList, collection)
  let nodeAfterNewNode = nodeAt(index, linkedList, collection)
  collection[address]["next"]=nodeBeforeNewNode["next"]
  nodeBeforeNewNode["next"]=address
  return collection
}

function deleteNodeAt(index, linkedList, collection){
  let nodeBeforeNodeToDelete = nodeAt(index-1, linkedList, collection)
  let addressofNodetoDelete = nodeBeforeNodeToDelete["next"]
  let addressForPreviousNodeToPointTo = nodeAt(index, linkedList, collection)["next"]
  nodeBeforeNodeToDelete["next"]= addressForPreviousNodeToPointTo
  delete collection[addressofNodetoDelete]
  return collection
}
