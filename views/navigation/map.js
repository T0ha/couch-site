function(doc) {
    if (doc.type=="page" && doc.published) {
	emit(doc.order, doc.button);
    }
}