function TreeNode(val, left, right) {
    this.val = val ?? Infinity;
    this.left = left ?? null;
    this.right = right ?? null;
}

function executation(node) {
    // console.log(node.toString());
    console.log(node.val);
}

/**
 *      Tree
 * 
 *       1
 *   2       8    
 * 5   1   7   null
 * 
 * preOrder : 1 2 5 1 8 7
 * inOrder  : 5 2 1 1 7 8
 * postOrder: 5 1 2 7 8 1
 * 
 */
function getTree() {
    let five = new TreeNode(5);
    let one = new TreeNode(1);
    let seven = new TreeNode(7);
    let two = new TreeNode(2, five, one);
    let eight = new TreeNode(8, seven);
    let root = new TreeNode(1, two, eight);
    return root;
}

// Recursive

function preOrderRecursive(root) {
    if (!root)
        return;

    executation(root);
    preOrderRecursive(root.left);
    preOrderRecursive(root.right);
}

function inOrderRecursive(root) {
    if (!root)
        return;

    inOrderRecursive(root.left);
    executation(root);
    inOrderRecursive(root.right);
}

function postOrderRecursive(root) {
    if (!root)
        return;

    postOrderRecursive(root.left);
    postOrderRecursive(root.right);
    executation(root);
}

// Interative 

function preOrderInterative(root) {
    if (!root)
        return;

    const stack = [];
    while (root || stack.length) {
        if (root) {
            executation(root);

            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            root = root.right;
        }
    }
}

function inOrderInterative(root) {
    if (!root)
        return;

    const stack = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            executation(root);
            root = root.right;
        }
    }

}

function postOrderInterative(root) {
    if (!root)
        return;

    let stack = [];
    let lastVisitedNode = new TreeNode();
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.slice(-1)[0];
            if (!root.right || lastVisitedNode === root.right) {
                stack.pop();
                executation(root);
                lastVisitedNode = root;
                root = null;
            } else {
                root = root.right;
            }
        }
    }
}



let root = getTree();

// preOrderInterative(root);
// inOrderInterative(root);
postOrderInterative(root);

// preOrderRecursive(root);
// inOrderRecursive(root);
// postOrderRecursive(root);